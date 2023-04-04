import { useState } from "react";
//import { Button, Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function StartGuest({ socket }) {
  const [count, setCount] = useState(0);
  const [t, i18n] = useTranslation("global");

  const handleLanguageClick = () => {
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
      {t("StartGuest.info")}
    </Button>
  );
}

export default StartGuest;
