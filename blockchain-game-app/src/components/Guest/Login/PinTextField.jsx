import React, { useState } from "react";

import { FormControl, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

function PinTextField({ socket, sendData }) {
  const [t, i18n] = useTranslation("global");
  const [pin, setPin] = useState("");
  const [invalidPin, setInvalidPin] = useState(false);

  const handleChange = (event) => {
    const validation_regex = /^[0-9]{6}$/; // Validates if the string contains 6 numbers.

    // if (validation_regex.test(event.target.value.toString())) {
    //   setInvalidPin(false);
    // } else {
    //   setInvalidPin(true);
    // }
    setPin(event.target.value);
    sendData(event.target.value);
  };

  return (
    <FormControl
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
        error={invalidPin}
        fullWidth
        type="number"
        variant="filled"
        name={t("PinTextField.label")}
        label={t("PinTextField.label")}
        onChange={handleChange}
        InputLabelProps={{
          sx: {
            color: "black",
            "&.Mui-focused": { color: "black" },
            fontWeight: "bold",
          },
        }}
        InputProps={{ disableUnderline: true }}
        sx={{
          "& .MuiFilledInput-root": {
            borderRadius: 3,
          },
          borderBottom: "none",
          boxShadow: "none",
        }}
      />
    </FormControl>
  );
}

export default PinTextField;
