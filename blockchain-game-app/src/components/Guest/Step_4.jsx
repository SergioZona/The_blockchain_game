import { Grid, Typography } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import DropdownMenu from "../Block_1/DropdownMenu";
import NavigationArrows from "../root/NavigationArrows";
import Username from "./Step_2/Username";
import Grades from "./Step_1/Grades";

const Step_4 = ({ socket }) => {
  const [t, i18n] = useTranslation("global");
  const location = useLocation();

  const [publicKey, setPublicKey] = useState("Public key");
  const [privateKey, setPrivateKey] = useState("123456789");
  const [grades, setGrades] = useState([
    { subject: t("Grades.math"), note: "A+" },
    { subject: t("Grades.language"), note: "B-" },
    { subject: t("Grades.economy"), note: "A" },
    { subject: t("Grades.chemistry"), note: "B+" },
    { subject: t("Grades.physics"), note: "A-" },
    { subject: t("Grades.biology"), note: "A+" },
    { subject: t("Grades.programming"), note: "A" },
  ]);

  const {
    host = false,
    path = "defaultPath",
    room = "defaultRoom",
  } = location.state || {};

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
      </Grid>
      <Grid item xs={2}>
        <DropdownMenu />
      </Grid>

      <NavigationArrows
        socket={socket}
        host={host}
        room={room}
      ></NavigationArrows>
    </Grid>
  );
};

export default Step_4;
