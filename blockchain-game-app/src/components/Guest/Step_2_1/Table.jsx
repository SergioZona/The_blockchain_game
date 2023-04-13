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
import { useTranslation } from "react-i18next";

const MyTable = () => {
  const [t, i18n] = useTranslation("global");

  let titles = ["a", "b", "c", t("Table.last_digits"), "Hash"];
  let values = [80, 65, 70, 12, "?"];

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
                  style={{
                    fontWeight: "bold",
                    border: "1px solid #000",
                    maxWidth: "30px",
                  }}
                >
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow style={{ backgroundColor: "#FFFFFF" }}>
              <TableCell
                align="center"
                style={{
                  borderLeft: "1px solid #000",
                  borderBottom: "1px solid #000",
                }}
              ></TableCell>
              <TableCell
                align="center"
                style={{ borderBottom: "1px solid #000" }}
              ></TableCell>
              <TableCell
                align="center"
                style={{ borderBottom: "1px solid #000" }}
              ></TableCell>
              <TableCell
                align="center"
                style={{ borderBottom: "1px solid #000" }}
              ></TableCell>
              <TableCell
                align="center"
                style={{ border: "1px solid #000", backgroundColor: "#FFC300" }}
              >
                <strong>212</strong>
              </TableCell>
            </TableRow>
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
