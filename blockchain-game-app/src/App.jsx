import { useState } from "react";
import "./App.css";
import { Box, Container } from "@mui/material";

import StartHost from "./components/StartHost";
import StartGuest from "./components/StartGuest";
import NavBar from "./components/NavBar";
import Description from "./components/Description";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <NavBar />
      </Container>
      <Description />
      
      <Box
        className="start-game"
        sx={{
          marginTop: "-3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <StartHost />
        <StartGuest />
      </Box>
    </>
  );
}

export default App;
