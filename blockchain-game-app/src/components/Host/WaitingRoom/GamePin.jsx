import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const GamePin = ({ pin }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // align items vertically
          justifyContent: "center",
          borderRadius: 4,
          textAlign: "center",
          bgcolor: "primary.main",
          padding: "0.5rem 1rem",
          border: 1.5,
          borderColor: "black",
          width: 300,
          height: 55,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "black", fontSize: "2rem" }}
        >
          {t("GamePin.label") + " " + pin}
        </Typography>
      </Box>
    </Container>
  );
};

export default GamePin;
