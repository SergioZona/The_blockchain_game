import React from "react";
import { CircularProgress, Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const WaitingVotes = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", marginTop: 2 }}>
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
          {t("BlockchainTable.waiting_votes")}
        </Typography>
        <CircularProgress size={40} color="primary" />
      </Container>
    </Box>
  );
};

export default WaitingVotes;
