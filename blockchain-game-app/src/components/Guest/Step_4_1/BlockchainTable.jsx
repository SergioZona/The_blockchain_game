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
import Votation from "./Votation";
import HashError from "./HashError";

const BlockchainTable = ({ socket, host, room, setHasVoted, voting }) => {
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
  const [realBlockchain, setRealBlockchain] = useState([]);
  const [rowCount, setRowCount] = useState(1);
  const [allowModiffication, setAllowModiffication] = useState(true);
  const [hashError, setHashError] = useState(false);

  useEffect(() => {
    // Join the user to the next step
    socket.on("table_updated", (data) => {
      setBlocks(data.blocks);
    });

    // Add new block to the blockchain
    socket.on("block_accepted", (block) => {
      setBlocks((blockchain) => {
        const lastIndex = blockchain.length - 1;
        const newBlocks = [...blockchain];
        newBlocks[lastIndex] = block;
        return newBlocks;
      });
      setAllowModiffication(false);
    });

    // Add new block to the blockchain
    socket.on("blockchain_validated", (realBlockchain) => {
      setRealBlockchain(realBlockchain);
    });
  }, [socket]);

  const updateTable = async (blocks) => {
    await socket.emit("update_table", blocks, room);
  };

  const validateBlockchain = async () => {
    await socket.emit("validate_blockchain", room);
  };

  const hashValidation = async (room, block) => {
    if (block.hash != "") {
      setHasVoted(true);
      await socket.emit("start_voting", room, block);
    } else {
      setHashError(true);
    }
  };

  const handleClose = () => {
    setHashError(false);
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

  const handleInputChange = (event, field, index) => {
    const newBlocks = [...blocks];
    newBlocks[index][field] = event.target.value;
    setBlocks(newBlocks);
  };

  return (
    <Container>
      <BlockGenerator
        socket={socket}
        room={room}
        host={host}
        setBlocks={setBlocks}
        setAllowModification={setAllowModiffication}
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
                <TableRow key={index}>
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
                      style={{
                        border: "1px solid #000",
                        // backgroundColor:
                        //   realBlockchain.length === 0
                        //     ? "white"
                        //     : row[key] !== realBlockchain[index][key]
                        //     ? "red"
                        //     : "white",
                      }}
                    >
                      <TextField
                        value={row[key]}
                        onChange={(event) => {
                          handleInputChange(event, key, index);
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
                      <TableRow key={index}>
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
                            {allowModiffication ? (
                              <TextField
                                onChange={(event) => {
                                  handleInputChange(event, key, index);
                                }}
                              />
                            ) : (
                              row[key]
                            )}
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
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={() => updateTable(blocks)}
              sx={{ marginTop: 2, width: 250, height: 35 }}
            >
              {t("BlockchainTable.update_table")}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={handleAddRow}
              sx={{
                marginTop: 2,
                width: 150,
                height: 35,
              }}
            >
              {t("BlockchainTable.add_row")}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={() => updateTable()}
              sx={{ marginTop: 0, width: 250, height: 35 }}
            >
              {t("BlockchainTable.validate_blockchain")}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={() => validateBlockchain(blocks)}
              sx={{
                marginTop: 0,
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
              <>
                {allowModiffication && (
                  <Button
                    variant="contained"
                    sx={{ marginTop: 2, width: 70, height: 35 }}
                    onClick={() => {
                      hashValidation(room, blocks[blocks.length - 1]);
                    }}
                  >
                    {t("BlockchainTable.vote")}
                  </Button>
                )}
              </>
            ) : (
              <WaitingVotes />
            )}
          </Grid>
        </Grid>
      )}
      <HashError open={hashError} handleClose={handleClose} />
    </Container>
  );
};

export default BlockchainTable;
