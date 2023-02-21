import { useState } from "react";
import "./App.css";
import { Button, Grid, Container } from "@mui/material";

import StartHost from "./components/host/StartHost";
import StartGuest from "./components/guest/StartGuest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container className="App">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <StartHost></StartHost>
        </Grid>
        <Grid item xs={6}>
          <StartGuest></StartGuest>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
