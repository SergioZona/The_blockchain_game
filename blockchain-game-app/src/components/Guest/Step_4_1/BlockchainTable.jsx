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
import InitialHash from "./InitialHash";
import WaitingVotes from "./WaitingVotes";
const BlockchainTable = ({ socket, host, room }) => {
  const [t, i18n] = useTranslation("global");

  const titles = [
    t("Table.block"),
    "Nonce (1-3)",
    "a",
    "b",
    "c",
    t("Table.last_digits"),
    "Hash",
  ];
  const [blocks, setBlocks] = useState([]);
  const [voting, setVoting] = useState(false);
  const [hash, setHash] = useState("");

  const [newBlocks, setNewBlocks] = useState([]);
  const [newEmptyBlocks, setNewEmptyBlocks] = useState([]);
  const [rowCount, setRowCount] = useState(1);

  useEffect(() => {
    // Join the user to the next step
    socket.on("table_updated", (data) => {
      setNewBlocks(data.blocks);
    });

    // Voting
    socket.on("voting_started", (block) => {
      setVoting(true);
      setHash(block.hash);
    });
  }, [socket]); // TODO

  const handleGetBlock = async (blocks) => {
    for (let i = 0; i < blocks.length; i++) {
      delete blocks[i]["id"];
    }
    await socket.emit("update_table", blocks, room);
  };

  const hashValidation = async (room, block) => {
    await socket.emit("start_voting", room, block);
  };

  const handleAddRow = () => {
    const newRow = {
      nonce: "",
      a: "",
      b: "",
      c: "",
      last_digits: "",
      hash: "",
    };

    setBlocks([...blocks, newRow]);
    setRowCount(rowCount + 1);
  };

  const handleRemoveRow = () => {
    const newBlocks = [...blocks];
    newBlocks.pop();
    setBlocks(newBlocks);
    setRowCount(rowCount - 1);
  };

  const handleInputChange = (event, field, row) => {
    const newBlocks = [...blocks];
    const rowIndex = newBlocks.findIndex((r) => r.id === row.id);
    newBlocks[rowIndex][field] = event.target.value;
    setBlocks(newBlocks);
  };

  return (
    <Container>
      <BlockGenerator
        socket={socket}
        room={room}
        host={host}
        giveInfo={setBlocks}
      ></BlockGenerator>

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
                    minWidth: "60px",
                  }}
                >
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {host && (
            <TableBody>
              <InitialHash />
              {blocks.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell
                    align="center"
                    style={{ border: "1px solid #000" }}
                  >
                    {index + 1}
                  </TableCell>
                  {Object.keys(row).map((key) => (
                    <TableCell
                      key={key}
                      align="center"
                      style={{ border: "1px solid #000" }}
                    >
                      <TextField
                        onChange={(event) => {
                          handleInputChange(event, key, row);
                        }}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          )}
          {!host && (
            <TableBody>
              <InitialHash />

              {blocks.map((row, index) => (
                <>
                  {blocks.length - 1 == index ? (
                    <>
                      <TableRow key={row.id}>
                        <TableCell
                          align="center"
                          style={{ border: "1px solid #000" }}
                        >
                          {index + 1}
                        </TableCell>
                        {Object.keys(row).map((key) => (
                          <TableCell
                            key={key}
                            align="center"
                            style={{ border: "1px solid #000" }}
                          >
                            <TextField
                              onChange={(event) => {
                                handleInputChange(event, key, row);
                              }}
                            />
                          </TableCell>
                        ))}
                      </TableRow>
                    </>
                  ) : (
                    <>
                      <TableRow key={row.id}>
                        <TableCell
                          align="center"
                          style={{ border: "1px solid #000" }}
                        >
                          {index + 1}
                        </TableCell>
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
                    </>
                  )}
                </>
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
              onClick={() => handleGetBlock(blocks)}
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
            {!voting ? (
              <Button
                variant="contained"
                sx={{ marginTop: 2, width: 70, height: 35 }}
                onClick={() => {
                  hashValidation(room, blocks[blocks.length - 1]);
                }}
              >
                {t("BlockchainTable.vote")}
              </Button>
            ) : (
              <WaitingVotes />
            )}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default BlockchainTable;
