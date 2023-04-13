import { Container, Divider, Grid, Link, Typography } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Status_3.svg";
import "../../css/components/Steps.css";
import NavigationArrows from "../root/NavigationArrows";
import Grades from "./Step_1/Grades";
import Username from "./Step_2/Username";
import Table from "./Step_3/Table";

const Step_3 = ({ socket }) => {
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
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
          <strong>{t("Step_3.step")}:</strong> {t("Step_3.label")}
        </Typography>
        <Logo viewBox="100 -25 500 80" />
        <Container sx={{ mt: 4, mb: 4 }}>
          <Table />
        </Container>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          {t("Step_3.add_rule")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          {t("Step_3.nonce_part1")}
          <Link href="https://www.investopedia.com/terms/n/nonce.asp">
            <strong>{t("Step_3.nonce_part2")}</strong>
          </Link>
          {t("Step_3.nonce_part3")}
        </Typography>

        <Divider
          variant="middle"
          sx={{ borderColor: "#000000", mb: 2 }}
        ></Divider>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          {t("Step_3.equation1")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          {t("Step_3.equation1_part1")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          {t("Step_3.equation1_part2")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          {t("Step_3.equation1_explanation")}
        </Typography>

        <Divider
          variant="middle"
          sx={{ borderColor: "#000000", mb: 2 }}
        ></Divider>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          {t("Step_3.equation2")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          {t("Step_3.equation2_part1")}
          <strong>{t("Step_3.equation2_part2")}</strong>
          {t("Step_3.equation2_part3")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          {t("Step_3.equation2_part4")}
          <strong>{t("Step_3.equation2_part2")}</strong>
          {t("Step_3.equation2_part5")}
        </Typography>

        {/* <Divider variant="middle"></Divider>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          In this case we have 203 as hash, however 203 is not divisible by 3 so
          we have to look for a nonce to obtain a number divisible by 3, in this
          case it is 1
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          In this case we have 203 as hash, however 203 is not divisible by 3 so
          we have to look for a nonce to obtain a number divisible by 3, in this
          case it is 1
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          We get 204 as hash
        </Typography> */}
      </Grid>
      <Grid item xs={2}></Grid>
      <NavigationArrows
        socket={socket}
        host={host}
        room={room}
      ></NavigationArrows>
    </Grid>
  );
};

export default Step_3;
