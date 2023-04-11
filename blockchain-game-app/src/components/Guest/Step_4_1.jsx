import { Container, Typography } from "@mui/material";
import { React, useEffect, useState } from "react";
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
