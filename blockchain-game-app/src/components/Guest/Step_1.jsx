import { Typography, Container } from "@mui/material";
import Username from './Step_1/Username';
import { ReactComponent as Logo } from '../../assets/Status_1.svg'
import UsernameId from './Step_1/UsernameId';
import Information from './Step_1/Information';
import { useTranslation } from "react-i18next";

const Step_1 = ({ socket }) => {
    const [t, i18n] = useTranslation("global");
    return (
        <Container sx={{ maxWidth: "800px", lexDirection: 'column', alignItems: 'center' }}>
        <Username />
        <Container sx={{ textAlign: "center", mt: "2rem", pb: "4rem", py: 20, marginLeft: "0rem"}}>
            <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
            <strong>{t("Step_1.step")}:</strong> {t("Step_1.label")}
            </Typography>
        </Container>
        <Container sx={{ textAlign: "center",  marginTop: "-14rem" }}>
            <Logo  viewBox="0 -14 700 180"/>
        </Container>
        <UsernameId></UsernameId>
        <Information></Information>
        </Container>
        
    );
};

export default Step_1;
