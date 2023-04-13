import PersonIcon from "@mui/icons-material/Person";
import { Typography, Container, TextField } from "@mui/material";
import TextFieldId from "../Step_1/TextFieldId";

const Username = ({ publicKey, privateKey }) => {
  return (
    <Container>
      <Container
        sx={{
          marginLeft: -1.5,
          marginTop: 0,
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
      {privateKey != "default" && (
        <Container
          sx={{
            marginLeft: -1,
            marginTop: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextFieldId privateKey={privateKey} />
        </Container>
      )}
    </Container>
  );
};

export default Username;
