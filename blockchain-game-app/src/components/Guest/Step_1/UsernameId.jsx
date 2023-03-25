import * as React from 'react';
import { ReactComponent as Logo } from '../../../assets/Hacker.svg'
import { Grid, Box, Container, Typography, TextField } from "@mui/material";;
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TextFieldId from './TextFieldId';
import Information from './Information';


const UsernameId = ({ socket }) => {
 return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          <Container sx={{ textAlign: "right"}}>
            <Logo viewBox="-110 0 350 350" />
          </Container>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Container sx={{ textAlign: "left", py: 1 }}>
              <Typography variant="h6" sx={{ color: "#000000", mb: 0 }}>This is your private ID</Typography>
              <ArrowDownwardIcon sx={{ mt: 1, ml: 11, fontSize: { xs: 50, sm: 50 } }} />
            </Container>
            <Container sx={{ textAlign: "left", py: 1 }}>
              <TextFieldId/>
            </Container>
          </Box>
        </Grid>
        
      </Grid>
      
    </Box>
    
  );
};

export default UsernameId;
