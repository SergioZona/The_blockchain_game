import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

function ConfirmationAlert(props) {
  const { open, handleClose, handleConfirm } = props;

  const [t, i18n] = useTranslation("global");

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{t("StartHost.confirmation")}</DialogTitle>
      <DialogContent>
        <p>{t("StartHost.question")}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t("StartHost.cancel")}</Button>
        <Link to="/WaitingRoom" style={{ textDecoration: "none" }}>
          <Button onClick={handleConfirm} autoFocus>
            {t("StartHost.continue")}
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationAlert;
