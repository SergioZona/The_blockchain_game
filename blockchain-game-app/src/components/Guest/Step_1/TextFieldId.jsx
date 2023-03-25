import * as React from 'react';
import { ReactComponent as Logo } from '../../../assets/Hacker.svg'
import { Grid, Box, Container, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Input, FormHelperText } from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Visibility from '@mui/icons-material/Visibility';

const TextFieldId = ({ socket }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    return (
        <FormControl sx={{ m: 0, ml: 0, width: '25ch', textAlign: "center" }} disabled variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Private ID</InputLabel>
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