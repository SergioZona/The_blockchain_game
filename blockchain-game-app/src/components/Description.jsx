import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@mui/material";
import { ReactComponent as ReactLogo1 } from '../assets/Description_1.svg'
import { ReactComponent as ReactLogo2 } from '../assets/Description_2.svg'

function Description() {

    const [t, i18n] = useTranslation("global");
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
            {t("StartDescription.title")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
            {t("StartDescription.info")}
        </Typography>
          
      <Box
        className="start-game"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
         <ReactLogo1 />
        <ReactLogo2 />
      </Box>
       
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
            {t("StartDescription.quote")}
        </Typography>
    </Container>
  );
}

export default Description;
