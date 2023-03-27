import { Grid , Box, Container } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import GuestWelcome from "./Login/GuestWelcome";
import UsernameTextField from "./Login/UsernameTextField";
import PinTextField from "./Login/PinTextField";
import ButtonGuest from "./Login/ButtonGuest";
import {
    Outlet, // Default route in case it doesn't match.
    Link,
  } from "react-router-dom";

const GuestLogin = ({ socket }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={2} sm={3}>
                    <Container sx={{ textAlign: "left", py: 8 }} >
                        <Link to="/">
                            <KeyboardBackspaceIcon sx={{ color: "#000000" , fontSize: '5vw', maxWidth: '50px' }}  />
                        </Link>
                    </Container>
                </Grid>
                <Grid item xs={10} sm={6}>
                    <Container sx={{ marginLeft:"0em", textAlign: "center", py: 1}}>
                        <GuestWelcome sx={{ py: 2}}/>
                        <UsernameTextField socket={socket} ></UsernameTextField>
                    </Container>
                    <Container sx={{ marginLeft:"0em",  textAlign: "center", py: 8}}>
                        <PinTextField socket={socket}></PinTextField>
                    </Container>
                    <Container sx={{ marginLeft:"0em",  marginTop: "-2em", textAlign: "center"}}>
                    <Link to="/Step_1" style={{ textDecoration: 'none' }}>
                    <ButtonGuest></ButtonGuest>
                    </Link>
                    </Container>
                   
                </Grid>
            </Grid>
            <Outlet />
        </Box>
    );
};

export default GuestLogin;
