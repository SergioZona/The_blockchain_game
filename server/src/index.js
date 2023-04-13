import express from "express";
import http from "http";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { PORT } from "./config.js";
import { generateUniqueRandomNumber, generateBlock } from "./random.js";
import { calculateHash } from "./blockchain.js";

import cors from "cors";
import fs from "fs";
import Papa from "papaparse";

// Room
const usedNumbers = new Set();

function generateRoom() {
  const uniqueRandomNumber = generateUniqueRandomNumber(usedNumbers);
  usedNumbers.add(uniqueRandomNumber);
  return uniqueRandomNumber;
}

// Load game data
function groupBy(array, key) {
  return array.reduce((result, item) => {
    const group = item[key];
    if (!result[group]) {
      result[group] = {};
    }
    for (const k in item) {
      if (k !== key) {
        result[group][k] = item[k];
      }
    }
    return result;
  }, {});
}

function loadCSV(filename) {
  const csvData = fs.readFileSync(filename, "utf8");
  const parsedData = Papa.parse(csvData, { header: true });
  const result = groupBy(parsedData.data, "student");
  return result;
}

const gameData = loadCSV("data/data.csv");
const roomUserCounts = {};
const roomtUserSockets = {};
const roomBlocks = {};
const roomVotes = {};
const roomBlockVoting = {};
const roomBlockchain = {};

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: [
      "https://blockchain-game-server.onrender.com",
      "http://localhost:5173",
      "https://the-blockchain-game-app.onrender.com",
    ], //"*"
  },
  upgrade: false,
});
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, "../client/build")));

io.on("connection", (socket) => {
  // A user connects to the server.
  console.log(`User Connected: ${socket.id}`);

  // A user start a game in the server.
  socket.on("start_game", () => {
    const room = generateRoom();
    socket.join(room);
    io.to(socket.id).emit("game_started", room);
    console.log(`User with ID: ${socket.id} created the room: ${room}`);
  });

  // User join to a room - If there is not room, the connection fails.
  socket.on("join_user", (data) => {
    console.log(`User: ${data.username} is trying to connect to: ${data.room}`);
    if (usedNumbers.has(data.room)) {
      socket.join(data.room);

      data["socket"] = socket.id;
      const socketDict = {};

      // Save the information for each socket in each room.
      if (roomUserCounts.hasOwnProperty(data.room)) {
        roomUserCounts[data.room] += 1;
        socketDict[socket.id] = gameData[roomUserCounts[data.room]];
        roomtUserSockets[data.room].push(socketDict);
      } else {
        roomUserCounts[data.room] = 0;
        socketDict[socket.id] = gameData[roomUserCounts[data.room]];
        roomtUserSockets[data.room] = [socketDict];
      }

      io.to(data.room).emit("user_joined", data);
      io.to(socket.id).emit("successful_room_connection");
      console.log(`User: ${data.username} joined to: ${data.room}`);
    } else {
      io.to(socket.id).emit("failed_room_connection");
      console.log(`User: ${data.username} could not join to: ${data.room}`);
    }
  });

  // User join to a room - If there is not room, the connection fails.
  socket.on("change_path", (path, room) => {
    console.log(`Redirecting users in ${room} to path: ${path}`);
    io.to(room).emit("change_path", {
      path: path,
      room: room,
    });

    const roomSockets = roomtUserSockets[room];
    for (let i = 0; i < roomSockets.length; i++) {
      const socket = roomSockets[i];
      const socketId = Object.keys(socket);
      const socketData = socket[socketId];
      io.to(socketId).emit("socket_data", socketData);
    }
  });

  // Update the table rows for the users in the room.
  socket.on("update_table", (blocks, room) => {
    console.log(`Updating table for users in ${room} to rows: ${blocks} `);
    console.log(blocks);
    io.to(room).emit("table_updated", {
      blocks: blocks,
    });
  });

  // Update the table rows for the users in the room.
  socket.on("generate_block", (room) => {
    console.log(`Generating block for ${room}`);

    const roomSockets = roomtUserSockets[room];
    console.log(roomSockets);

    const block = generateBlock(roomSockets, roomBlocks);

    // Save the information for each socket in each room.
    if (roomBlocks.hasOwnProperty(room)) {
      roomBlocks[room].push(block);
      const previousBlockIndex = roomBlocks[room].length - 2;
      const previousBlock = roomBlockchain[room][previousBlockIndex];
      const previousHash = parseInt(previousBlock.hash.toString().slice(-2)); // Obtain the last two digits of the previous hash

      roomBlockchain[room].push(
        calculateHash(
          block.public_key,
          block.subject,
          block.grade,
          previousHash
        )
      );
    } else {
      roomBlocks[room] = [block];
      roomBlockchain[room] = [
        calculateHash(block.public_key, block.subject, block.grade, 12),
      ]; // Initial hash: 212
    }
    console.log(roomBlockchain[room]);

    io.to(room).emit("block_information_generated", block);
  });

  // Start the votation
  socket.on("start_voting", (room, block) => {
    console.log(block);
    roomBlockVoting[room] = block;
    console.log(`Start votation in room ${room} for hash ${block.hash}`);
    roomVotes[room] = { yes: 1, no: 0 };
    io.to(room).emit("voting_started", block);
  });

  // Receive the vote from users
  socket.on("receive_votes", (room, vote) => {
    console.log(`Received vote ${vote} in room ${room}`);
    roomVotes[room][vote] += 1;
    const numUsers = roomtUserSockets[room].length;
    if (roomVotes[room]["yes"] > numUsers / 2) {
      io.to(room).emit("block_accepted", roomBlockVoting[room]);
    } else if (roomVotes[room]["no"] >= numUsers / 2) {
      io.to(room).emit("block_rejected");
    }
    io.to(room).emit("vote_received", roomVotes[room]);
  });

  // Solve the blockchain values
  socket.on("solve_blockchain", (room) => {
    console.log(`Solving the blockchain in room ${room}`);
    io.to(room).emit("blockchain_solved", roomBlockchain[room]);
  });

  // Validate the blockchain current blockchain with the correct one.
  socket.on("validate_blockchain", (room) => {
    console.log(`Validating the blockchain in room ${room}`);
    io.to(room).emit("blockchain_validated", roomBlockchain[room]);
  });

  // When the user leaves the server.
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log("SERVER RUNNING");
});

console.log(`server on port ${PORT}`);
