import { Container, Typography } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/Status_2.svg";
import Username from "./Step_2/Username";

import { React, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import NavigationArrows from "../root/NavigationArrows";
import Information from "./Step_2/Information";
import Table from "./Step_2/Table";

const Step_2 = ({ socket }) => {
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
    <Container
      sx={{ maxWidth: "800px", lexDirection: "column", alignItems: "center" }}
    >
      <Username />
      <Container sx={{ textAlign: "center", py: 29, marginLeft: "0rem" }}>
        <Typography variant="h6" sx={{ color: "#000000" }}>
          <strong>{t("Step_2.step")}:</strong> {t("Step_2.label")}
        </Typography>
      </Container>
      <Container sx={{ textAlign: "center", marginTop: "-16rem" }}>
        <Logo viewBox="0 -14 700 180" />
      </Container>
      <Table></Table>
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

export default Step_2;
