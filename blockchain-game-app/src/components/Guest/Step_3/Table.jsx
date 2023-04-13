import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Container,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MyTable = () => {
  const [t, i18n] = useTranslation("global");

  const [lastValue, setLastValue] = useState("");
  const [values, setValues] = useState(["?", 80, 65, 70, 12, 203]);
  const titles = ["Nonce (1-3)", "a", "b", "c", t("Table.last_digits"), "Hash"];
  const [pin, setPin] = useState("");

  const setValue = (value) => {
    // Cambiar los valores cada 10 segundos
    setValues([1, 80, 65, 70, 12, value]);
  };

  const setValidValue = (value) => {
    if (value >= 1 && value <= 3) {
      setValues((prevValues) => {
        const newValues = [...prevValues];
        const index = newValues.indexOf(203);
        if (index !== -1) {
          newValues[index] = value === 3 ? 204 : 203;
        }
        return newValues;
      });
    }
  };

  const validValue = (value) => {
    const intValue = parseInt(value);

    return Number.isInteger(intValue) && intValue >= 1 && intValue <= 3;
  };

  const handleLastValueChange = (event) => {
    setLastValue(event.target.value);
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= 3) {
      setValidValue(value);
      setPin(value);
      setValue(value + values[1] + values[2] + values[3] - values[4]);
      setValidValue(null);
    }
    setLastValue(event.target.value);
  };

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
            <TableRow style={{ backgroundColor: "#FFFFFF", maxWidth: "30px" }}>
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
              {values.map((value, index) => (
                <TableCell
                  key={index}
                  align="center"
                  className={
                    index === 5 && value % 3 === 0
                      ? validValue >= 1 && validValue <= 3
                        ? "valid"
                        : "changed"
                      : "s"
                  }
                  style={{ border: "1px solid #000", maxWidth: "30px" }}
                >
                  {index === 0 ? (
                    <TextField
                      inputProps={{ min: 1, max: 3 }}
                      sx={{
                        width: "100px",
                        marginLeft: "0px",
                        marginRight: "0px",
                      }}
                      value={lastValue}
                      onChange={handleLastValueChange}
                      type="number"
                    />
                  ) : (
                    value
                  )}
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
