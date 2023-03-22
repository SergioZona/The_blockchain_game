import { useState } from "react";
//import { Button, Container } from "react-bootstrap";
import { Button } from "@mui/material";

function Start() {
  const [count, setCount] = useState(0);

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ width: "25vh", height: "10vh" }}
    >
      Enter to a current game
    </Button>
  );
}

export default Start;
