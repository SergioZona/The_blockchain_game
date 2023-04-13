import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Container,
  Button,
  Grid,
} from "@mui/material";
import BlockGenerator from "./BlockGenerator";
import { useTranslation } from "react-i18next";

const BlockchainTable = ({ socket, host, room }) => {
  const [t, i18n] = useTranslation("global");

  const titles = ["Nonce (1-3)", "a", "b", "c", t("Table.last_digits"), "Hash"];
  const [rows, setRows] = useState([]);
  const [newRows, setNewRows] = useState([]);
  const [rowCount, setRowCount] = useState(1);

  useEffect(() => {
    // Join the user to the next step
    socket.on("table_updated", (data) => {
      setNewRows(data.rows);
    });
  }, [socket]);

  const handleClick = async (rows) => {
    for (let i = 0; i < rows.length; i++) {
      delete rows[i]["id"];
    }
    await socket.emit("update_table", rows, room);
  };

  const handleGetBlock = async (rows) => {
    for (let i = 0; i < rows.length; i++) {
      delete rows[i]["id"];
    }
    await socket.emit("update_table", rows, room);
  };

  const handleAddRow = () => {
    const newRow = { id: rowCount + 1 };
    setRows([...rows, newRow]);
    setRowCount(rowCount + 1);
  };

  const handleRemoveRow = () => {
    const newRows = [...rows];
    newRows.pop();
    setRows(newRows);
    setRowCount(rowCount - 1);
  };

  const handleInputChange = (event, field, row) => {
    const newRows = [...rows];
    const rowIndex = newRows.findIndex((r) => r.id === row.id);
    newRows[rowIndex][field] = event.target.value;
    setRows(newRows);
  };

  return (
    <Container>
      {host && (
        <>
          <BlockGenerator socket={socket} room={room}></BlockGenerator>
        </>
      )}
      <TableContainer component={Paper} style={{ backgroundColor: "#e0ecfc" }}>
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
          {host && (
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid #000" }}
                  >
                    <TextField
                      value={row.nonce}
                      onChange={(event) => {
                        handleInputChange(event, "nonce", row);
                      }}
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid #000" }}
                  >
                    <TextField
                      value={row.a}
                      onChange={(event) => {
                        handleInputChange(event, "a", row);
                      }}
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid #000" }}
                  >
                    <TextField
                      value={row.b}
                      onChange={(event) => {
                        handleInputChange(event, "b", row);
                      }}
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid #000" }}
                  >
                    <TextField
                      value={row.c}
                      onChange={(event) => {
                        handleInputChange(event, "c", row);
                      }}
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid #000" }}
                  >
                    <TextField
                      value={row.lastDigits}
                      onChange={(event) => {
                        handleInputChange(
                          event,
                          "Value of the last 2 digits of the previous hash",
                          row
                        );
                      }}
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid #000" }}
                  >
                    <TextField
                      value={row.hash}
                      onChange={(event) => {
                        handleInputChange(event, "hash", row);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
          {!host && (
            <TableBody>
              {newRows.map((row, index) => (
                <TableRow key={index}>
                  {Object.keys(row).map((key) => (
                    <TableCell
                      key={key}
                      align="center"
                      style={{ border: "1px solid #000" }}
                    >
                      {row[key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {host && (
        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => handleClick(rows)}
              sx={{ marginTop: 2, width: 250, height: 35 }}
            >
              {t("BlockchainTable.update_table")}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handleAddRow}
              sx={{
                width: 150,
                height: 35,
              }}
            >
              {t("BlockchainTable.add_row")}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handleRemoveRow}
              sx={{
                width: 150,
                height: 35,
              }}
            >
              {t("BlockchainTable.delete_row")}
            </Button>
          </Grid>
        </Grid>
      )}
      {!host && (
        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ marginTop: 2, width: 70, height: 35 }}
            >
              {t("BlockchainTable.vote")}
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default BlockchainTable;
