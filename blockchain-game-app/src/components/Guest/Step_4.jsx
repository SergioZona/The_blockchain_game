import { Container, Typography } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import DropdownMenu from "../Block_1/DropdownMenu";
import NavigationArrows from "../root/NavigationArrows";
import Username from "./Step_2/Username";

const Step_4 = ({ socket }) => {
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
      <Username publicKey={publicKey} privateKey={privateKey} />

      <DropdownMenu />
      <Container
        sx={{
          textAlign: "center",
          mt: "2rem",
          pb: "4rem",
          py: 20,
          marginLeft: "0rem",
        }}
      >
        <Typography variant="h5" sx={{ color: "#000000", mb: 8 }}>
          <strong>{t("Block_1.title")}</strong>
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          <strong>{t("Block_1.item_1")}</strong> {t("Block_1.value_1")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          <strong>{t("Block_1.item_2")}</strong> {t("Block_1.value_2")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 8 }}>
          <strong>{t("Block_1.item_3")}</strong> {t("Block_1.value_3")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          <strong>{t("Block_1.item_4")}</strong> {t("Block_1.value_4")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          <strong>{t("Block_1.item_5")}</strong> {t("Block_1.value_5")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
          <strong>{t("Block_1.item_6")}</strong> {t("Block_1.value_6")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#FF0000", mb: 2 }}>
          <strong>{t("Block_1.item_7")}</strong>
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

export default Step_4;
