import { Typography, Container } from "@mui/material";
import Username from './Step_2/Username';

import Table from './Step_4_1/Table';
import { useTranslation } from "react-i18next";
import '../../css/components/Steps.css';

const Step_41 = ({ socket }) => {
    const [t, i18n] = useTranslation("global");
    return (
        <Container sx={{lexDirection: 'column', alignItems: 'center' }}>
        <Username />
            <Container sx={{ textAlign: "center", py: 29, marginLeft: "0rem"}}>
                <Typography variant="h6" sx={{ color: "#000000", mb: 4}}>
                <strong>Practice:</strong> 
                </Typography>
                
                <Container sx={{ mt: 4, mb: 4}}> 
                    <Table />
                </Container>
               
            </Container>
        </Container>
    );
};

export default Step_41;
