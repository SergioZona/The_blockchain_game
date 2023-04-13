import { Container, Typography, Grid } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Status_3.svg";
import "../../css/components/Steps.css";
import DropdownMenu from "../Block_1/DropdownMenu";
import NavigationArrows from "../root/NavigationArrows";
import Username from "./Step_2/Username";
import Table from "./Step_4_1/BlockchainTable";
import Grades from "./Step_1/Grades";
import Votation from "./Step_4_1/Votation";

const Step_41 = ({ socket }) => {
  const [t, i18n] = useTranslation("global");
  const location = useLocation();
  const [hash, setHash] = useState("");
  const [publicKey, setPublicKey] = useState("Public key");
  const [privateKey, setPrivateKey] = useState("123456789");
  const [voting, setVoting] = useState(false);
  const [grades, setGrades] = useState([
    { subject: t("Grades.math"), note: "A+" },
    { subject: t("Grades.language"), note: "B-" },
    { subject: t("Grades.economy"), note: "A" },
    { subject: t("Grades.chemistry"), note: "B+" },
    { subject: t("Grades.physics"), note: "A-" },
    { subject: t("Grades.biology"), note: "A+" },
    { subject: t("Grades.programming"), note: "A" },
  ]);
  const [hasVoted, setHasVoted] = useState(false);

  const {
    host = false,
    path = "defaultPath",
    room = "defaultRoom",
  } = location.state || {};

  const handleClick = () => {
    console.log("Button was clicked!");
    // Add your custom onClick logic here
  };

  // Voting
  socket.on("voting_started", (block) => {
    setVoting(true);
    setHash(block.hash);
  });

  

  useEffect(() => {
    // Get socket data
    socket.on("socket_data", (data) => {
      setPublicKey(data.public_key);
      setPrivateKey(data.private_key);

      const tempGrades = [
        { subject: t("Grades.math"), note: data.math },
        { subject: t("Grades.language"), note: data.language },
        { subject: t("Grades.economy"), note: data.economy },
        { subject: t("Grades.chemistry"), note: data.chemistry },
        { subject: t("Grades.physics"), note: data.physics },
        { subject: t("Grades.biology"), note: data.biology },
        { subject: t("Grades.programming"), note: data.programming },
      ];

      setGrades(tempGrades);
    });
    socket.on("block_rejected", () => {
      setHasVoted(false);
      setVoting(false);
    });

      // Add new block to the blockchain
      socket.on("block_accepted", () => {
        setVoting(false);
        setHasVoted(false);
  
      });
  }, [socket]);

  return (
    <Grid
      container
      spacing={0}
      sx={{ justifyContent: "center", marginTop: 10 }}
    >
      <Grid item xs={2}>
        <Username publicKey={publicKey} privateKey={privateKey} />
        <Grades grades={grades}></Grades>
      </Grid>

      <Grid item xs={8} sx={{ textAlign: "center", marginTop: 4 }}>
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
          <strong>{t("BlockchainTable.practice")}</strong>
        </Typography>

        <Container sx={{ mt: 4, mb: 4 }}>
          <Table socket={socket} host={host} room={room} setHasVoted={setHasVoted} voting={voting} />
        </Container>
      </Grid>
      <Grid item xs={2}>
        <DropdownMenu />
        {voting && (
          <Votation hasVoted={hasVoted}  setHasVoted={setHasVoted} socket={socket} hash={hash} room={room}></Votation>
        )}

      </Grid>
      <NavigationArrows
        socket={socket}
        host={host}
        room={room}
      ></NavigationArrows>
    </Grid>
  );
};

export default Step_41;
