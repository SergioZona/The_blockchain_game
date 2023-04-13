import PersonIcon from "@mui/icons-material/Person";
import { Typography, Container, TextField } from "@mui/material";

const Username = ({ publicKey }) => {
  return (
    <Container
      sx={{
        marginLeft: -22,
        marginTop: 10,
        display: "flex",
        alignItems: "center",
      }}
    >
      <PersonIcon
        sx={{
          textAlign: "left",
          color: "#000000",
          fontSize: "6vw",
          maxWidth: "60px",
          flex: "0 0 auto",
          "@media (max-width:600px)": {
            fontSize: "10vw",
            maxWidth: "80px",
          },
        }}
      />
      <Typography
        variant="h5"
        component="div"
        sx={{ color: "#000000", flex: "1 1 auto", ml: 1 }}
      >
        {publicKey}
      </Typography>
    </Container>
  );
};

export default Username;
