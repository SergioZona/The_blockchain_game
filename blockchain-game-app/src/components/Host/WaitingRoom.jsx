import { useState, useEffect } from "react";

import { Container, Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import GamePin from "./WaitingRoom/GamePin";
import NumPlayers from "./WaitingRoom/NumPlayers";
import NavigationArrows from "../root/NavigationArrows";

const WaitingRoom = ({ socket }) => {
  const [t, i18n] = useTranslation("global");
  const [namesList, setNamesList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [numUsers, setNumUsers] = useState(0);
  const [pin, setPin] = useState("");
  const [host, setHost] = useState("");

  useEffect(() => {
    // Emit "start_game" event to ask for the pin.
    socket.emit("start_game");

    // Listen for "game_started" event to retrieve the pin.
    socket.on("game_started", (data) => {
      setPin(data);
      setHost(true);    

    });

    // Update the name list.
    socket.on("user_joined", (data) => {
      setNamesList((namesList) => [...namesList, data.username]);
      setDataList((dataList) => [...dataList, data]);
      setNumUsers((numUsers) => numUsers + 1);
    });
  }, [socket]);

  return (
    <>
      <Container
        sx={{ maxWidth: "800px", lexDirection: "column", alignItems: "center" }}
      >
        <Container sx={{ marginLeft: "0em", textAlign: "center", py: 3 }}>
          <GamePin pin={pin}></GamePin>
          <NumPlayers numUsers={numUsers}></NumPlayers>
        </Container>
        <Container>
          <Box sx={{ flexGrow: 0, textAlign: "center", py: 3 }}>
            {namesList.length > 0 ? (
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                {namesList.map((element, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Typography variant="h6">{element}</Typography>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="h6">Waiting for players...</Typography>
            )}
          </Box>
        </Container>
      </Container>
      <NavigationArrows usersData={dataList} />
    </>
  );
};

export default WaitingRoom;
