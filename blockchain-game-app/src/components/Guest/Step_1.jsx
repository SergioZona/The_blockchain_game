import PersonIcon from '@mui/icons-material/Person';
import { Typography, Container } from "@mui/material";
import Username from './Step_1/Username';
import { ReactComponent as Logo } from '../../assets/Status_1.svg'
import UsernameId from './Step_1/UsernameId';
import Information from './Step_1/Information';

const Step_1 = ({ socket }) => {
  return (
    <Container sx={{ maxWidth: "800px", lexDirection: 'column', alignItems: 'center' }}>
      <Username />
      <Container sx={{ textAlign: "center", mt: "2rem", pb: "4rem", py: 20, marginLeft: "0rem"}}>
        <Typography variant="h6" sx={{ color: "#000000", mb: 4 }}>
          <strong>Step 1:</strong> Know your private ID
        </Typography>
      </Container>
      <Container sx={{ textAlign: "center",  marginTop: "-14rem" }}>
        <Logo  
          viewBox="0 -14 700 180"
        />
      </Container>
      <UsernameId></UsernameId>
    <Information></Information>
    </Container>
  );
};

export default Step_1;
