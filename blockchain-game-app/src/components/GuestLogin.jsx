import { useTranslation } from "react-i18next";
import { Grid , Toolbar, Box, Container, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import GuestWelcome from "./GuestWelcome";
import {
    Outlet, // Default route in case it doesn't match.
    Link,
} from "react-router-dom"
import UsernameTextField from "./UsernameTextField";
import PinTextField from "./PinTextField";
import ButtonGuest from "./ButtonGuest";


const GuestLogin = ({ socket }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={1} sm={1}>
                    <Container sx={{ textAlign: "left", py: 8 }} >
                        <Link to="/">
                            <KeyboardBackspaceIcon sx={{ color: "#000000" , fontSize: '4vw', maxWidth: '80px' }}  />
                        </Link>
                    </Container>
                </Grid>
                <Grid item xs={11} sm={10}>
                    <Container sx={{ marginLeft:"0em", textAlign: "center", py: 2}}>
                        <GuestWelcome sx={{ py: 2}}/>
                        <UsernameTextField socket={socket}></UsernameTextField>
                    </Container>
                    <Container sx={{ marginLeft:"0em",  textAlign: "center", py: 5}}>
                        <PinTextField socket={socket}></PinTextField>
                    </Container>
                    <Container sx={{ marginLeft:"0em",  marginTop: "-2em", textAlign: "center"}}>
                    <ButtonGuest></ButtonGuest>
                    </Container>
                   
                </Grid>
            </Grid>
           
        </Box>
    );
};

export default GuestLogin;
