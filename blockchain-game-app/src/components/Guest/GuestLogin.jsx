import { Grid , Box, Container } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import GuestWelcome from "./Login/GuestWelcome";
import {
    Outlet, // Default route in case it doesn't match.
    Link,
} from "react-router-dom"
import UsernameTextField from "./Login/UsernameTextField";
import PinTextField from "./Login/PinTextField";
import ButtonGuest from "./Login/ButtonGuest";


const GuestLogin = ({ socket }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={1} sm={0}>
                    <Container sx={{ textAlign: "left", py: 8 }} >
                        <Link to="/">
                            <KeyboardBackspaceIcon sx={{ color: "#000000" , fontSize: '5vw', maxWidth: '50px' }}  />
                        </Link>
                    </Container>
                </Grid>
                <Grid item xs={11} sm={10}>
                    <Container sx={{ marginLeft:"0em", textAlign: "center", py: 1}}>
                        <GuestWelcome sx={{ py: 2}}/>
                        <UsernameTextField socket={socket} ></UsernameTextField>
                    </Container>
                    <Container sx={{ marginLeft:"0em",  textAlign: "center", py: 8}}>
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
