import io from "socket.io-client";
import { SERVER_URL } from "./helpers/urls";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { useEffect, useState } from "react";

import GuestLogin from "./components/Guest/GuestLogin";
import Step_1 from "./components/Guest/Step_1";
import Step_2 from "./components/Guest/Step_2";
import Step_2_1 from "./components/Guest/Step_2_1";
import Step_3 from "./components/Guest/Step_3";
import WaitingRoom from "./components/Host/WaitingRoom";
import DropdownMenu from "./components/Block_1/DropdownMenu";
import Block_1 from "./components/Block_1/Block_1";
import Root from "./components/Root";
import NavBar from "./components/root/NavBar";

import { Container } from "@mui/material";

function App() {
  const socket = io.connect(SERVER_URL);

  // Routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Root socket={socket} />} />
        <Route path="/guestLogin" element={<GuestLogin socket={socket} />} />
        <Route path="/Step_1" element={<Step_1 socket={socket} />} />
        <Route path="/Step_2" element={<Step_2 socket={socket} />} />
        <Route path="/Step_3" element={<Step_3 socket={socket} />} />
        <Route
          path="/WaitingRoom"
          element={
            <WaitingRoom socket={socket} room={"123"} username={"123"} />
          }
        />
        <Route path="/Confirmation" element={<WaitingRoom />} />

        {/* <Route path="*" element={return (<div>Esta ruta no existe<div/>)} /> */}
      </Route>
    )
  );

  // Server
  return (
    <>
      <NavBar />
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
    </>
  );
}

export default App;
