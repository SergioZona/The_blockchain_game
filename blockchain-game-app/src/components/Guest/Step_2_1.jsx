import { Typography, Container } from "@mui/material";
import Username from './Step_2/Username';
import { ReactComponent as Logo } from '../../assets/Status_2.svg'
import Table from './Step_2_1/Table';
import { useTranslation } from "react-i18next";


const Step_21 = ({ socket }) => {
    const [t, i18n] = useTranslation("global");
    return (
        <Container sx={{lexDirection: 'column', alignItems: 'center' }}>
        <Username />
            <Container sx={{ textAlign: "center", py: 29, marginLeft: "0rem"}}>
                <Typography variant="h6" sx={{ color: "#000000" }}>
                <strong>{t("Step_2.step")}:</strong> {t("Step_2.label")}
                </Typography>
                <Logo  viewBox="0 -14 700 180"/>
                <Container sx={{ mt: 4, mb: 4 }}> 
                    <Table />
                </Container>
                <Typography variant="h6" sx={{ color: "#000000" , mb:2}}>
                    let's add some rules
                </Typography>
                <Typography variant="h6" sx={{ color: "#000000", mb:2 }}>
                    Now we are also going to subtract the last two digits of the previous hash
                </Typography>
                <Typography variant="h6" sx={{ color: "#000000", mb:2 }}>
                    For example
                </Typography>
                <Typography variant="h6" sx={{ color: "#000000", mb:2 }}>
                    a + b + c - Value of the last two digits of the previous hash = hash
                </Typography>
                <Typography variant="h6" sx={{ color: "#000000", mb:2 }}>
                    80 + 65 + 70 - 12 = 203
                </Typography>
            </Container>
        </Container>
    );
};

export default Step_21;
