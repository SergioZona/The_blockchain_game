//import { Box, Grid, TextField } from "@mui/material";
import {Box} from "@mui/material"; 
import Grid from '@mui/material/Unstable_Grid2';


function FullBorderedGrid() {
  let titles = ["Grade 1", "Grade 2", "Grade 3", "Hash!"];
  let values = [80, 65, 65, "?"];


  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
     
        sx={{
          '--Grid-borderWidth': '2px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 20,
          },
          backgroundColor: '#e0ecfc',

        }}
      >
        
        {titles.map((item, index) => (
          <Grid key={index} {...{ xs: 12, sm: 6, md: 2, lg: 3 }} minHeight={60}>
            {item}
          </Grid>
        ))}
      </Grid>
      <Grid
        container
     
        sx={{
          '--Grid-borderWidth': '2px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 20,
          },
          backgroundColor: '#e0ecfc',

        }}
      >
        
          <Grid sx={{ xs: 12, sm: 6, md: 2, lg: 3 }} minHeight={60}>
            212
          </Grid>
      </Grid>
      <Grid
        container
        
        sx={{
          '--Grid-borderWidth': '2px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            
          },
          backgroundColor: '#e0ecfc',
    
        }}
      >
        
        {values.map((item, index) => (
          <Grid key={index} {...{ xs: 12, sm: 2, md: 2, lg: 3 }} minHeight={60}>
            {item}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FullBorderedGrid;
