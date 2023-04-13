import React, { useState, useEffect } from "react";
import { Typography, Button, Grid, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const BlockGenerator = ({ socket, room }) => {
  const [t, i18n] = useTranslation("global");
  const [block, setBlock] = useState(t("BlockGenerator.label"));

  const generateBlock = async (room) => {
    await socket.emit("generate_block", room);
  };

  useEffect(() => {
    //Get block data
    socket.on("block_information_generated", (data) => {
      const subject =
        data.subject.charAt(0).toUpperCase() + data.subject.slice(1);

      setBlock(data.public_key + " - " + subject + " - " + data.grade);
    });
  }, [socket]);

  return (
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
  );
};

export default BlockGenerator;
