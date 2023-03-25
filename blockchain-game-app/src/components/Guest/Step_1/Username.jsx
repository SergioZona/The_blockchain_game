import PersonIcon from '@mui/icons-material/Person';
import { Typography, Container } from "@mui/material";

const Username = ({ socket }) => {
    return (
        <Container sx={{ position: "absolute", left: 7, top: 10, py: 8 }}>
        <PersonIcon
          sx={{
            textAlign: "left",
            color: "#000000",
            fontSize: '6vw',
            maxWidth: '60px',
            '@media (max-width:600px)': {
              fontSize: '10vw',
              maxWidth: '80px',
            },
          }}
        />
      </Container>
    );
};

export default Username;