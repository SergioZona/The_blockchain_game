import PersonIcon from '@mui/icons-material/Person';
import { Typography, Container, TextField } from "@mui/material";
import TextFieldId from '../Step_1/TextFieldId';

const Username = ({ socket }) => {
    return (
        <Container>
             <Container sx={{ position: "absolute", left: 7, top: 10, py: 8, display: "flex", alignItems: "center" }}>
            <PersonIcon
                sx={{
                    textAlign: "left",
                    color: "#000000",
                    fontSize: '6vw',
                    maxWidth: '60px',
                    flex: "0 0 auto",
                    '@media (max-width:600px)': {
                        fontSize: '10vw',
                        maxWidth: '80px',
                    },
                }}
            />
            <Typography variant="h5" component="div" sx={{ color: "#000000", flex: "1 1 auto", ml: 1 }}>
                User007
            </Typography>
            </Container>
                <Container
                    sx={{
                    position: "absolute",
                    left: 7,
                    py: 20,
                    display: "flex",
                    alignItems: "center",
                    }}
                >
                <TextFieldId />
            </Container>
        </Container>
    );
};

export default Username;