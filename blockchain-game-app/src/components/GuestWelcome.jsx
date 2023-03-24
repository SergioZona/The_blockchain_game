import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@mui/material";

function GuestWelcome() {

    const [t, i18n] = useTranslation("global");
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
    <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
        {t("GuestWelcome.title")}
    </Typography>
    <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
        {t("GuestWelcome.info")}
    </Typography>
    </Container>
    );
}

export default GuestWelcome;