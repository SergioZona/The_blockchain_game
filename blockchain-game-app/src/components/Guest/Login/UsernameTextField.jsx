import React, { useState } from "react";

import { FormControl, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

function UsernameTextField({ sendData }) {
  const [username, setUsername] = useState("");

  const [t, i18n] = useTranslation("global");

  const handleChange = (event) => {
    setUsername(event.target.value);
    sendData(event.target.value);
  };

  return (
    <FormControl
      variant="filled"
      sx={{
        m: 1,
        width: "50ch",
        marginTop: "-4em",
        maxWidth: "350px",
        backgroundColor: "primary.main",
        textAlign: "center",
        "@media (max-width:600px)": {
          width: "100%",
          maxWidth: "100%",
          marginLeft: "0px",
          marginRight: "0px",
        },
        borderRadius: 3,
      }}
    >
      <TextField
        error={false}
        fullWidth
        variant="filled"
        name={t("UsernameTextField.label")}
        label={t("UsernameTextField.label")}
        onChange={handleChange}
        InputLabelProps={{
          sx: {
            borderRadius: 3,
            color: "black",
            "&.Mui-focused": { color: "black" },
            fontWeight: "bold",
          },
        }}
        sx={{
          "& .MuiFilledInput-root": {
            borderRadius: 3,
          },
        }}
        InputProps={{ disableUnderline: true }}
      />
    </FormControl>
  );
}

export default UsernameTextField;
