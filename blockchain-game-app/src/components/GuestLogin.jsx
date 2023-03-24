import { useTranslation } from "react-i18next";
import { Grid , Toolbar, Box, Container, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import GuestWelcome from "./GuestWelcome";

import {
    Outlet, // Default route in case it doesn't match.
    Link,
  } from "react-router-dom"
import GuestTextField from "./GuestTextField";

const GuestLogin = ({ socket }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid xs={2}>
        <Container  sx={{ marginLeft:"-6em", marginTop:"0.5em", textAlign: "center", py: 8 }}>
            <Link to="/">
                <KeyboardBackspaceIcon sx={{ color: "#000000" , fontSize: 70 }} />
            </Link>
            </Container>
          </Grid>
          <Grid xs={10}>
          <Container  sx={{ marginLeft:"0em", marginTop:"-2em", textAlign: "center", py: 8 }}>
            <GuestWelcome sx={{ py: 8 }}/>
            </Container>
          </Grid>
          
        </Grid>
            <Box
            className="start-game"
            sx={{
            display: "flex",
            marginLeft:"-6em",
            alignItems: "center",
            flexDirection: 'column',
            justifyContent: "center",
            marginTop: "-6rem",
            }}
        >
            <GuestTextField></GuestTextField>
            <GuestTextField></GuestTextField>
        </Box>
            
      </Box>
      
    );
  };
  export default GuestLogin;
  