import { Container, Typography } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Status_2.svg";
import NavigationArrows from "../root/NavigationArrows";
import Username from "./Step_2/Username";
import Table from "./Step_2_1/Table";

const Step_21 = ({ socket }) => {
  const location = useLocation();
  const [publicKey, setPublicKey] = useState("Public key");
  const [privateKey, setPrivateKey] = useState("123456789");

  const {
    host = false,
    usersInfo = [],
    path = "defaultPath",
    room = "defaultRoom",
  } = location.state || {};

  useEffect(() => {
    // Get socket data
    socket.on("socket_data", (data) => {
      setPublicKey(data.public_key);
      setPrivateKey(data.private_key);
    });
  }, [socket]);

  const [t, i18n] = useTranslation("global");
  return (
    <Container sx={{ lexDirection: "column", alignItems: "center" }}>
      <Username publicKey={publicKey} privateKey={privateKey} />
      <Container sx={{ textAlign: "center", py: 29, marginLeft: "0rem" }}>
        <Typography variant="h6" sx={{ color: "#000000" }}>
          <strong>{t("Step_2.step")}:</strong> {t("Step_2.label")}
        </Typography>
        <Logo viewBox="0 -14 700 180" />
        <Container sx={{ mt: 4, mb: 4 }}>
          <Table />
        </Container>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          let's add some rules
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          Now we are also going to subtract the last two digits of the previous
          hash
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          For example
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          a + b + c - Value of the last two digits of the previous hash = hash
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          80 + 65 + 70 - 12 = 203
        </Typography>
      </Container>
      <NavigationArrows
        socket={socket}
        host={host}
        usersInfo={usersInfo}
        room={room}
      ></NavigationArrows>
    </Container>
  );
};

export default Step_21;
