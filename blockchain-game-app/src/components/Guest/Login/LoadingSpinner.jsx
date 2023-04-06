import React from "react";
import { CircularProgress, Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const LoadingSpinner = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", paddingTop: 25 }}>
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
          {t("StartGuest.waiting")}
        </Typography>
        <CircularProgress size={80} color="primary" />
      </Container>
    </Box>
  );
};

export default LoadingSpinner;
