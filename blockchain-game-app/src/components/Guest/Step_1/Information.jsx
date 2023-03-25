import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Information() {
    const [t, i18n] = useTranslation("global");
    return(
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Container sx = {{ textAlign: "center"}}>
            <Typography variant="h6" sx={{ color: "#000000"}}>
                {t("Information.label")}
            </Typography>
        </Container>
        <Container sx = {{ textAlign: "center",  py: 3} }>
            <Typography variant="h6" sx={{ color: "#000000"}}>
                {t("Information.wait")}
            </Typography>
        </Container>
     </Box>
    );
}

export default Information;