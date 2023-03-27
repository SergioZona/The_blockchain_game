import { InputAdornment, OutlinedInput, FormControl, InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";

function PinTextField({ socket }) {
    const [t, i18n] = useTranslation("global");
    return (
        <FormControl  variant="outlined"
        sx={{
            m: 1, 
            width: '50ch',
            marginTop:"-4em",
            maxWidth: '350px',
            backgroundColor: '#60acec',
            textAlign: "center",
            '@media (max-width:600px)': {
                width: '100%',
                maxWidth: '100%',
                marginLeft: '0px',
                marginRight: '0px'
            },
        }}
        >
          <InputLabel sx={{ color: 'black', '&.Mui-focused': { color: 'black' }, fontWeight: 'bold'}}>{t("PinTextField.label")}</InputLabel>
          <OutlinedInput inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>           
        </FormControl>
    );
}

export default PinTextField;