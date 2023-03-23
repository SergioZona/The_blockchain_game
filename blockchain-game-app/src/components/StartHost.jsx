import { useState } from "react";
//import { Button, Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function Start() {
  const [count, setCount] = useState(0);
  const [t, i18n] = useTranslation("global");

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ width: "25vh", height: "10vh" }}
    >
      {t("StartHost.info")}
    </Button>
  );
}

export default Start;
