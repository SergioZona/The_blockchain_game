import PersonIcon from '@mui/icons-material/Person';
import { Container, OutlinedInput, FormControl, Box, Typography, InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";

const NumPlayers = ({ socket }) => {
    return(
        <Box sx={{ flexGrow: 1 }} >
            <Container sx={{ md: 2, ml:-22, textAlign: "left", py: 6}}>
            <FormControl sx={{ 
                borderRadius: '20px',
                backgroundColor: 'black',
                textAlign: "center",
                
                }} disabled variant="outlined">
            <OutlinedInput
            sx={{ 
                borderRadius: '20px',
                width: '19ch', fontSize: '1.2em', fontWeight: 'bold', color: '#FFFFFF',
                '@media (max-width:600px)': {
                    marginLeft: '0px',
                    marginRight: '0px'
                },}}
                id=""
                value="123456789"
                inputProps={{ style: { color: 'white' } }}
                startAdornment={
                <InputAdornment position="start">
                    <PersonIcon
                    sx={{ color: "white" }}
                    edge="start"

                    >
                    
                    </PersonIcon>
                </InputAdornment>
                }
                />
        </FormControl>
                
                
            </Container>
            <Container sx={{ marginTop: "-6rem"}}>
            <Typography variant="h4" sx={{ color: "#000000" }}>
            <strong>Players</strong> 
            </Typography>
            </Container>
        </Box>
    );

};

export default NumPlayers;