import { Container, Typography } from "@mui/material";
import { React, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Status_3.svg";
import "../../css/components/Steps.css";
import DropdownMenu from "../Block_1/DropdownMenu";
import NavigationArrows from "../root/NavigationArrows";
import Username from "./Step_2/Username";
import Table from "./Step_4_1/MyTable";

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
    <Container sx={{lexDirection: 'column', alignItems: 'center' }}>
        <Username />
        <DropdownMenu />
            <Container sx={{ textAlign: "center", py: 29, marginLeft: "0rem"}}>
                <Typography variant="h6" sx={{ color: "#000000", mb: 4}}>
                <strong>Practice:</strong> 
                </Typography>
                
                <Container sx={{ mt: 4, mb: 4}}> 
                    <Table 
                      socket={socket}
                      host={host}
                      usersInfo={usersInfo}
                      room={room}
                    />
                </Container>
               
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
