import * as React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTranslation } from "react-i18next";
import Visibility from '@mui/icons-material/Visibility';

const TextFieldId = ({ socket }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [t, i18n] = useTranslation("global");

    return (
        <FormControl sx={{ m: 0, ml: 0, width: '25ch', textAlign: "center" }} disabled variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{t("TextFieldID.label")}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value="123456789"
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
                />
        </FormControl>

    );
};

export default TextFieldId;