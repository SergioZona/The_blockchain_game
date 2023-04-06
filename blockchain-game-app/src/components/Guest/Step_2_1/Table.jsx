//import { Box, Grid, TextField } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"; 
import Grid from '@mui/material/Unstable_Grid2';


const MyTable = () => {
  let titles = ["a", "b", "c", "Value of the last 2 digits of the previous hash", "Hash!"];
  let values = [80, 65, 70, 12, "?"];

  return (
    <TableContainer component={Paper} style={{ backgroundColor: '#e0ecfc' }} >
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#e0ecfc'}}>
            {titles.map(title => (
              <TableCell key={title} align="center" style={{ fontWeight: 'bold', border: '1px solid #000' , maxWidth: '30px'}}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow style={{ backgroundColor: '#FFFFFF' }}>
            <TableCell align="center" style={{ borderLeft: '1px solid #000', borderBottom: '1px solid #000' }}></TableCell>
            <TableCell align="center" style={{ borderBottom: '1px solid #000' }}></TableCell>
            <TableCell align="center" style={{ borderBottom: '1px solid #000' }}></TableCell>
            <TableCell align="center" style={{ borderBottom: '1px solid #000' }}></TableCell>
            <TableCell align="center" style={{ border: '1px solid #000', backgroundColor: "#FFC300" }}><strong>212</strong></TableCell>
        </TableRow>
          <TableRow>
            {values.map(value => (
              <TableCell key={value} align="center" style={{ border: '1px solid #000' }}>{value}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;