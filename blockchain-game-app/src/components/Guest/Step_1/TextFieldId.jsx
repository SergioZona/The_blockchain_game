import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import * as React from "react";

import { useTranslation } from "react-i18next";

const TextFieldId = ({ privateKey }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [t, i18n] = useTranslation("global");

  return (
    <FormControl
      sx={{ m: 0, ml: 0, width: "25ch", textAlign: "center" }}
      disabled
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">
        {t("TextFieldID.label")}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={privateKey}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="start"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        sx={{
          color: "black",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "& .MuiOutlinedInput-input": {
            color: "black",
          },
          "&:hover .MuiOutlinedInput-input": {
            color: "black",
          },
          "&.Mui-focused .MuiOutlinedInput-input": {
            color: "black",
          },
        }}
      />
    </FormControl>
  );
};

export default TextFieldId;
