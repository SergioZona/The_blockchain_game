import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const DropdownMnu = () => {
    const [t, i18n] = useTranslation("global");
    return (
      <Container sx={{ position: "absolute", top: 10, py: 8, display: "flex", right: 15, justifyContent: "right"}}>
            <ArrowDropDownCircleIcon
                sx={{
                    textAlign: "right",
                    color: "#000000",
                    fontSize: '6vw',
                    maxWidth: '40px',
                    flex: "0 0 auto",
                    '@media (max-width:600px)': {
                        fontSize: '10vw',
                        maxWidth: '80px',
                    },
                }}
            />
        </Container>
    )
}

export default DropdownMnu