//import { Box, Grid, TextField } from "@mui/material";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MyTable = () => {
  let titles = ["a", "b", "c", "Hash"];
  let values = [80, 65, 70, "?"];

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <TableContainer
        component={Paper}
        style={{ backgroundColor: "#e0ecfc", width: "80%" }}
      >
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#e0ecfc" }}>
              {titles.map((title) => (
                <TableCell
                  key={title}
                  align="center"
                  style={{ fontWeight: "bold", border: "1px solid #000" }}
                >
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {values.map((value) => (
                <TableCell
                  key={value}
                  align="center"
                  style={{ border: "1px solid #000" }}
                >
                  {value}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MyTable;
