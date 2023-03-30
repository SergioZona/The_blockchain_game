import { InputAdornment, OutlinedInput, FormControl, InputLabel, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import GamePin from "./WaitingRoom/GamePin";
import NumPlayers from "./WaitingRoom/NumPlayers";

const WaitingRoom = ({ socket }) => {
    const [t, i18n] = useTranslation("global");

    return (
        <Container sx={{ maxWidth: "800px", lexDirection: 'column', alignItems: 'center'}}>
            <Container sx={{ marginLeft:"0em",  textAlign: "center", py: 12}}>   
                <GamePin></GamePin>
                <NumPlayers></NumPlayers>
            </Container>
                   
        </Container>
    );
};

export default WaitingRoom;