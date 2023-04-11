import express from "express";
import http from "http";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { PORT } from "./config.js";
import { generateUniqueRandomNumber } from "./roomGenerator.js";
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

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*", //"http://localhost:3000",
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
  socket.on("change_path", (usersInfo, path, room) => {
    console.log(`Redirecting users in ${room} to path: ${path}`);
    io.to(room).emit("change_path", {
      usersInfo: usersInfo,
      path: path,
      room: room,
    });

    const roomSockets = roomtUserSockets[room];
    for (var i = 0; i < roomSockets.length; i++) {
      const socket = roomSockets[i];
      const socketId = Object.keys(socket);
      const socketData = socket[socketId];
      io.to(socketId).emit("socket_data", socketData);
    }
  });

  // Update the table rows for the users in the room.
  socket.on("update_table", (rows, room) => {
    console.log(`Updating table for users in ${room} to rows: ${rows} `);
    console.log(rows);
    io.to(room).emit("table_updated", {
      rows:rows,
    });
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
