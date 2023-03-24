import { useState } from "react";
//import { Button, Container } from "react-bootstrap";
import { Button } from "@mui/material";

function StartHost({ socket }) {
  const [count, setCount] = useState(0);

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ width: "25vh", height: "10vh" }}
    >
      Host a new game
    </Button>
  );
}

export default StartHost;
