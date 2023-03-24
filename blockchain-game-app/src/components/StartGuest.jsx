import { useState } from "react";
//import { Button, Container } from "react-bootstrap";
import { Button } from "@mui/material";

function StartGuest({ socket }) {
  const [count, setCount] = useState(0);

  const handleLanguageClick = () => {
    socket.connect();

    // Listen to an event
    socket.on("joined", (data) => {
      console.log(data);
    });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ width: "25vh", height: "10vh" }}
      onClick={handleLanguageClick}
    >
      Enter to a current game
    </Button>
  );
}

export default StartGuest;
