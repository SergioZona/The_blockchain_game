import { Container, Typography } from "@mui/material";
import { React, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Status_1.svg";
import NavigationArrows from "../root/NavigationArrows";
import Information from "./Step_1/Information";
import Username from "./Step_1/Username";
import UsernameId from "./Step_1/UsernameId";

const Step_1 = ({ socket }) => {
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
      <UsernameId></UsernameId>
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
