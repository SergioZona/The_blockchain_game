import { Container, Typography } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Status_1.svg";
import NavigationArrows from "../root/NavigationArrows";
import Information from "./Step_1/Information";
import Username from "./Step_1/Username";
import UsernameId from "./Step_1/UsernameId";

const Step_1 = ({ socket }) => {
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
    <Container
      sx={{ maxWidth: "800px", lexDirection: "column", alignItems: "center" }}
    >
      <Username publicKey={publicKey} />
      <Container
        sx={{
          textAlign: "center",
          mt: "2rem",
          pb: "4rem",
          py: 20,
          marginLeft: "0rem",
        }}
      >
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
          <strong>{t("Step_1.step")}:</strong> {t("Step_1.label")}
        </Typography>
      </Container>
      <Container sx={{ textAlign: "center", marginTop: "-14rem" }}>
        <Logo viewBox="0 -14 700 180" />
      </Container>
      <UsernameId privateKey={privateKey}></UsernameId>
      <Information></Information>
      <NavigationArrows
        socket={socket}
        host={host}
        usersInfo={usersInfo}
        room={room}
      ></NavigationArrows>
    </Container>
  );
};

export default Step_1;
