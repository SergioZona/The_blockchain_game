import PersonIcon from '@mui/icons-material/Person';
import { Typography, Container } from "@mui/material";

const Step_1 = ({ socket }) => {
  return (
    <Container >
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
      <Container sx={{ textAlign: "center", marginTop: "-3rem", py: 25 }}>
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
          <strong>Step 1:</strong> Know your private ID
        </Typography>
      </Container>
    </Container>
  );
};

export default Step_1;
