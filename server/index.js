import express from "express";
import http from "http";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { PORT } from "./config.js";
import { generateUniqueRandomNumber } from "./roomGenerator.js";
import cors from "cors";

// Room
const usedNumbers = new Set();

function generateRoom() {
  const uniqueRandomNumber = generateUniqueRandomNumber(usedNumbers);
  usedNumbers.add(uniqueRandomNumber);
  console.log(uniqueRandomNumber);
  return uniqueRandomNumber;
}

// CSV
function loadData() {
  var csv_file = File("test.csv");
  csv_file.open("r");
  csv_file.encoding = "utf-8";
  var data = csv_file.read().split("/\r\n|\n/"); // split by lines
  csv_file.close();
  for (var row in data) data[row].split(","); // split all lines by comas

  alert(data); // here is your 2d array
}

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
      io.to(data.room).emit("user_joined", data);
      io.to(socket.id).emit("successful_room_connection");
      io.to(socket.id).emit("you_are_the_host");
      console.log(`User: ${data.username} joined to: ${data.room}`);
    } else {
      io.to(socket.id).emit("failed_room_connection");
      console.log(`User: ${data.username} could not join to: ${data.room}`);
    }
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
