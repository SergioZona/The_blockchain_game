import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";

const ConnectionError = ({ open, handleClose }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
        transform: `translate(-${10}rem, -${8}rem)`, // Use coordinates and rem units
      }}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        {t("GuestLogin.error")}
      </Alert>
    </Snackbar>
  );
};

export default ConnectionError;
