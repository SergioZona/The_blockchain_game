import { Typography, Container } from "@mui/material";
import Username from './Step_2/Username';
import { ReactComponent as Logo } from '../../assets/Status_2.svg'

import Information from './Step_2/Information';
import { useTranslation } from "react-i18next";
import FullBorderedGrid from "./Step_2/FullBorderedGrid";

const Step_3 = ({ socket }) => {
    const [t, i18n] = useTranslation("global");
    return (
        <Container sx={{ maxWidth: "800px", lexDirection: 'column', alignItems: 'center' }}>
        <Username />
        <Container sx={{ textAlign: "center", py: 29, marginLeft: "0rem"}}>
            <Typography variant="h6" sx={{ color: "#000000" }}>
            <strong>{t("Step_2.step")}:</strong> {t("Step_2.label")}
            </Typography>
        </Container>
        <Container sx={{ textAlign: "center",  marginTop: "-16rem" }}>
            <Logo  viewBox="0 -14 700 180"/>
        </Container>
        <FullBorderedGrid></FullBorderedGrid>
        </Container>
    );
};

export default Step_3;
