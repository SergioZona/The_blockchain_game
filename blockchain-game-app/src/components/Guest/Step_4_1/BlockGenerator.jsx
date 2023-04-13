import React, { useState, useEffect } from "react";
import { Typography, Button, Grid, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const BlockGenerator = ({ socket, room, host, setBlocks, setAllowModification }) => {
  const [t, i18n] = useTranslation("global");
  const [block, setBlock] = useState(t("BlockGenerator.label"));
  const [blockData, setBlockData] = useState();

  const generateBlock = async (room) => {

    await socket.emit("generate_block", room);
  };

  useEffect(() => {
    //Get block data
    socket.on("block_information_generated", (data) => {
      data.subject =
        data.subject.charAt(0).toUpperCase() + data.subject.slice(1);
      //setAllowModification(true);
      setBlock(data.public_key + " - " + data.subject + " - " + data.grade);
      setBlockData(data);

      const emptyBlock = {
        nonce: "",
        a: "",
        b: "",
        c: "",
        last_digits: "",
        hash: "",
      };

      setBlocks((blocks) => [...blocks, emptyBlock]);
    });
  }, [socket]);

  return (
    <>
      {host && (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 800,
            marginBottom: 5,
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={0}
          >
            <Grid item xs={6}>
              <Typography variant="h6">{block}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{ width: 175, height: 50 }}
                    onClick={() => {
                      generateBlock(room);
                    }}
                  >
                    {t("BlockGenerator.generate")}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button variant="contained" sx={{ width: 175, height: 50 }}>
                    {t("BlockGenerator.send")}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
      {!host && (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 800,
            marginBottom: 5,
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={0}
          >
            {blockData ? (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    <strong>{t("BlockchainTable.block_public_key")}</strong>
                    {blockData.public_key}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    <strong>{t("BlockchainTable.block_subject")}</strong>
                    {blockData.subject}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    <strong>{t("BlockchainTable.block_grade")}</strong>
                    {blockData.grade}
                  </Typography>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    {t("BlockchainTable.wait")}
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default BlockGenerator;
