import { Container, OutlinedInput, FormControl, InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";

const GamePin = ({ socket }) => {
    const [t, i18n] = useTranslation("global");

    return (
        <Container sx ={{alignItems: "center"}}>
            <FormControl sx={{ 
                borderRadius: '20px',
                backgroundColor: '#60acec',
                textAlign: "center",
                
                }} disabled variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-password"
                    value="Game Pin: XXXXXX"
                    sx={{ 
                        borderRadius: '20px',
                        width: '19ch', fontSize: '2em', fontWeight: 'bold',
                        '@media (max-width:600px)': {
                            marginLeft: '0px',
                            marginRight: '0px'
                        },}}
                    />
            </FormControl>
        </Container>

    );
};

export default GamePin;