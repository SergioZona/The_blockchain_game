import React, { useEffect, useState } from "react";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Container, Grid, Typography } from "@mui/material";
import ButtonGuest from "./Login/ButtonGuest";
import ConnectionError from "./Login/ConnectionError";
import GuestWelcome from "./Login/GuestWelcome";
import LoadingSpinner from "./Login/LoadingSpinner";
import PinTextField from "./Login/PinTextField";
import UsernameTextField from "./Login/UsernameTextField";

import { Link, Outlet, useNavigate } from "react-router-dom";

const GuestLogin = ({ socket }) => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [navigation, setNavigation] = useState("");
  const [error, setError] = useState(false);
  const [joined, setJoined] = useState(false);
  const navigate = useNavigate();

  const buttonClick = async () => {
    let data = {};
    data["username"] = username;
    data["room"] = parseInt(pin);

    await socket.emit("join_user", data);
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

    // Join the user to the next step
    socket.on("change_path", (data) => {
      navigate("/" + data.path, {
        state: {
          data: data.data,
          path: data.path,
          room: data.room,
        },
      });
    });
  }, [socket]);

  return (
    <>
      {/* Use the LoadingButton if the user has joined */}
      {joined ? (
        <>
          <LoadingSpinner />
          <Typography>{navigation}</Typography>
        </>
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
