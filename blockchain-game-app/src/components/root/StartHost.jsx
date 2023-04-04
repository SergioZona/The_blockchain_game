//import { Button, Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function StartHost({ sendData }) {
  const [t, i18n] = useTranslation("global");

  const handleChange = () => {
    sendData(true);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ width: "25vh", height: "10vh" }}
      onClick={handleChange}
    >
      {t("StartHost.info")}
    </Button>
  );
}

export default StartHost;
