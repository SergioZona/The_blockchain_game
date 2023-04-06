import React, { useState, useEffect } from "react";

import { Grid, Box, Container, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import GuestWelcome from "./Login/GuestWelcome";
import UsernameTextField from "./Login/UsernameTextField";
import PinTextField from "./Login/PinTextField";
import ButtonGuest from "./Login/ButtonGuest";
import ConnectionError from "./Login/ConnectionError";
import LoadingSpinner from "./Login/LoadingSpinner";

import {
  useNavigate,
  Outlet, // Default route in case it doesn't match.
  Link,
} from "react-router-dom";

const GuestLogin = ({ socket }) => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [joined, setJoined] = useState(false);
  const navigate = useNavigate();

  const buttonClick = () => {
    let data = {};
    data["username"] = username;
    data["room"] = parseInt(pin);

    socket.emit("join_user", data);
  };

  const handleClose = () => {
    setError(false);
  };

  useEffect(() => {
    // If the room does not exists
    socket.on("failed_room_connection", () => {
      setError(true);
    });

    // If the user joins the room
    socket.on("successful_room_connection", () => {
      setJoined(true);
    });

    //
    socket.on("continue_step_1", () => {
      navigate("/sample");
    });
  }, [socket]);

  return (
    <>
      {/* Use the LoadingButton if the user has joined */}
      {joined ? (
        <LoadingSpinner />
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2} sm={3}>
              <Container sx={{ textAlign: "left", py: 8 }}>
                <Link to="/">
                  <KeyboardBackspaceIcon
                    sx={{ color: "#000000", fontSize: "5vw", maxWidth: "50px" }}
                  />
                </Link>
              </Container>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Container sx={{ marginLeft: "0em", textAlign: "center", py: 1 }}>
                <GuestWelcome sx={{ py: 2 }} />
                <UsernameTextField sendData={setUsername}></UsernameTextField>
              </Container>
              <Container sx={{ marginLeft: "0em", textAlign: "center", py: 8 }}>
                <PinTextField sendData={setPin}></PinTextField>
              </Container>
              <Container
                sx={{
                  marginLeft: "0em",
                  marginTop: "-2em",
                  textAlign: "center",
                }}
              >
                {/* <Link to="/Step_1" style={{ textDecoration: "none" }}> */}
                <ButtonGuest onClick={buttonClick}></ButtonGuest>
                {/* </Link> */}
              </Container>
            </Grid>
          </Grid>
          <ConnectionError open={error} handleClose={handleClose} />

          <Outlet />
        </Box>
      )}
    </>
  );
};

export default GuestLogin;
