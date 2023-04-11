import { Container, Typography } from "@mui/material";
import { React, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Status_3.svg";
import "../../css/components/Steps.css";
import NavigationArrows from "../root/NavigationArrows";
import Username from "./Step_2/Username";
import Table from "./Step_4_1/Table";

const Step_41 = ({ socket }) => {
  const location = useLocation();
  const {
    host = false,
    usersInfo = [],
    path = "defaultPath",
    room = "defaultRoom",
  } = location.state || {};

  useEffect(() => {
    // Join the user to the next step
    socket.on("change_path", (data) => {
      navigate("/" + path, {
        state: {
          host: host,
          data: data.usersInfo,
          path: data.path,
          room: data.room,
        },
      });
    });
  }, [socket]);

  const [t, i18n] = useTranslation("global");
  return (
    <Container sx={{ lexDirection: "column", alignItems: "center" }}>
      <Username />
      <Container sx={{ textAlign: "center", py: 29, marginLeft: "0rem" }}>
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
          <strong>{t("Step_3.step")}:</strong> {t("Step_3.label")}
        </Typography>
        <Logo viewBox="100 -25 500 80" />
        <Container sx={{ mt: 4, mb: 4 }}>
          <Table />
        </Container>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          Let's add last rule to our game
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          Nonce is a number between 1 and 3 that you will adjust to calculate a
          hash that can be equally divisible by 3
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          In this case we have 203 as hash, however 203 is not divisible by 3 so
          we have to look for a nonce to obtain a number divisible by 3, in this
          case it is 1
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
          We get 204 as hash
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

export default Step_41;
