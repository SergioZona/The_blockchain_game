import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Information() {
    const [t, i18n] = useTranslation("global");
    return(
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Container sx = {{ textAlign: "center",  py: 4}}>
            <Typography variant="h6" sx={{ color: "#000000"}}>
                {t("Step_2.info_1")}
            </Typography>
        </Container>
        <Container sx = {{ textAlign: "center",  py: 1} }>
            <Typography variant="h6" sx={{ color: "#000000"}}>
                {t("Step_2.info_2")}
            </Typography>
        </Container>
        <Container sx = {{ textAlign: "center",  py: 2} }>
            <Typography variant="h6" sx={{ color: "#000000"}}>
                <strong>{t("Step_2.title")}</strong>
            </Typography>
        </Container>
        <Container sx = {{ textAlign: "center",  py: 2} }>
            <Typography variant="h6" sx={{ color: "#000000"}}>
                {t("Step_2.example")}
            </Typography>
        </Container>
        <Container sx = {{ textAlign: "center",  py: 0} }>
            <Typography variant="h6" sx={{ color: "#000000"}}>
                {t("Step_2.numeric")}
            </Typography>
        </Container>
     </Box>
    );
}

export default Information;