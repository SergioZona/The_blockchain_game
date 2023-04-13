import React, { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const Votation = ({ socket, room, hasVoted, hash, setHasVoted, miner }) => {
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);

  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    socket.on("vote_received", (data) => {
      setYesVotes(data.yes);
      setNoVotes(data.no);
      setTotalVotes(data.yes + data.no);
    });
  }, [socket]);

  const handleVote = (vote) => {
    setHasVoted(true);
    socket.emit("receive_votes", room, vote);
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      {!hasVoted && (
        <>
          <Grid item xs={12}>
            <Typography variant="body1">
              {t("BlockchainTable.miner_found") + hash + " - " + miner}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              {t("BlockchainTable.validation")}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={() => handleVote("yes")}>
              Yes
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={() => handleVote("no")}>
              No
            </Button>
          </Grid>
        </>
      )}

      {totalVotes > 0 && (
        <Grid item>
          <Typography variant="body1">
            Total votes: {totalVotes}
            <br />
            Yes votes: {yesVotes} ({Math.round((yesVotes / totalVotes) * 100)}%)
            <br />
            No votes: {noVotes} ({Math.round((noVotes / totalVotes) * 100)}%)
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Votation;
