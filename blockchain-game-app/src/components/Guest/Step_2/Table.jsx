//import { Box, Grid, TextField } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"; 
import Grid from '@mui/material/Unstable_Grid2';


const MyTable = () => {
  let titles = ["a", "b", "c", "Hash!"];
  let values = [80, 65, 70, "?"];

  return (
    <TableContainer component={Paper} style={{ backgroundColor: '#e0ecfc' }} >
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#e0ecfc' }}>
            {titles.map(title => (
              <TableCell key={title} align="center" style={{ fontWeight: 'bold', border: '1px solid #000' }}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
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