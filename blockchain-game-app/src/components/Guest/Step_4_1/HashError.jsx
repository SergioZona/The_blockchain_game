import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";

const HashError = ({ open, handleClose }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        {t("BlockchainTable.hash_empty")}
      </Alert>
    </Snackbar>
  );
};

export default HashError;
