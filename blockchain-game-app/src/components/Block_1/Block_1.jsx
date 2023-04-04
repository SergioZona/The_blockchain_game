import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Typography, Container } from "@mui/material";
import Username from '../Guest/Step_1/Username';
import { useTranslation } from "react-i18next";
import DropdownMenu from './DropdownMenu';

const Block_1 = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <Container sx={{ maxWidth: "800px", lexDirection: 'column', alignItems: 'center' }}>
            <Username />
            <DropdownMenu/>
            <Container sx={{ textAlign: "center", mt: "2rem", pb: "4rem", py: 20, marginLeft: "0rem"}}>
                <Typography variant="h5" sx={{ color: "#000000", mb: 8 }}>
                    <strong>{t("Block_1.title")}</strong> 
                </Typography>
                <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
                    <strong>{t("Block_1.item_1")}</strong> {t("Block_1.value_1")}
                </Typography><Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
                    <strong>{t("Block_1.item_2")}</strong> {t("Block_1.value_2")}
                </Typography>
               <Typography variant="h6" sx={{ color: "#000000", mb: 8 }}>
                    <strong>{t("Block_1.item_3")}</strong> {t("Block_1.value_3")}
                </Typography>
                <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
                    <strong>{t("Block_1.item_4")}</strong> {t("Block_1.value_4")}
                </Typography>
                <Typography variant="h6" sx={{ color: "#000000", mb: 2 }}>
                    <strong>{t("Block_1.item_5")}</strong> {t("Block_1.value_5")}
                </Typography>
                <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
                    <strong>{t("Block_1.item_6")}</strong> {t("Block_1.value_6")}
                </Typography>
                <Typography variant="h6" sx={{ color: "#FF0000", mb: 2 }}>
                    <strong>{t("Block_1.item_7")}</strong>
                </Typography>
            </Container>
            
        </Container>
    )
}

export default Block_1