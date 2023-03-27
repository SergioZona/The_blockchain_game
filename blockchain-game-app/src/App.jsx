import io from "socket.io-client";
import SERVER_URL from "./helpers/urls";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import NavBar from "./components/root/NavBar";
import Description from "./components/root/Description";
import Root from "./components/Root";
import Test from "./components/Test";
import GuestLogin from "./components/Guest/GuestLogin";
import Step_1 from "./components/Guest/Step_1";
import Step_2 from "./components/Guest/Step_2";
import Step_3 from "./components/Guest/Step_3";
import WaitingRoom from "./components/Host/WaitingRoom";

function App() {
  const socket = io.connect(SERVER_URL);

  // Routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Root socket={socket} />} />
        <Route path="/guestLogin" element={<GuestLogin socket={socket} />} />
        <Route path="/test" element={<Test socket={socket} />} />
        <Route path="/Step_1" element={<Step_1 socket={socket} />} />
        <Route path="/Step_2" element={<Step_2 socket={socket} />} />
        <Route path="/Step_3" element={<Step_3 socket={socket} />} />
        <Route path="/WaitingRoom" element={<WaitingRoom socket={socket} />} />
        {/* <Route path="*" element={return (<div>Esta ruta no existe<div/>)} /> */}
      </Route>
    )
  );

  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    //   <div className="App">
    //     <input
    //       placeholder="Room Number..."
    //       onChange={(event) => {
    //         setRoom(event.target.value);
    //       }}
    //     />
    //     <button onClick={joinRoom}> Join Room</button>
    //     <input
    //       placeholder="Message..."
    //       onChange={(event) => {
    //         setMessage(event.target.value);
    //       }}
    //     />
    //     <button onClick={sendMessage}> Send Message</button>
    //     <h1> Message:</h1>
    //     {messageReceived}
    //   </div>

    <>
      <NavBar />
      <RouterProvider router={router}></RouterProvider>

      {/* <Container maxWidth="xl" disableGutters>
        <NavBar />
      </Container>
      <Description />
      
      <Box
        className="start-game"
        sx={{
          marginTop: "-3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <StartHost socket={socket}></StartHost>
        <StartGuest socket={socket}></StartGuest>
      </Box> */}
    </>
  );
}

export default App;
