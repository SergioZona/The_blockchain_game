import PersonIcon from "@mui/icons-material/Person";
import {
  Container,
  OutlinedInput,
  FormControl,
  Box,
  Typography,
  Avatar,
  InputAdornment,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const NumPlayers = ({ numUsers }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ md: 2, ml: -22, textAlign: "left", py: 6 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 4,
            bgcolor: "black",
            padding: "0.5rem",
            border: 1.5,
            borderColor: "black",
            width: 100,
            height: 40,
          }}
        >
          <Avatar sx={{ bgcolor: "black" }}>
            <PersonIcon />
          </Avatar>
          <Typography
            variant="subtitle1"
            sx={{ marginLeft: "1rem", fontWeight: "bold", color: "white" }}
          >
            {numUsers}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default NumPlayers;
