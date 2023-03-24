import { TextField } from "@mui/material";

function GuestTextField({ socket }) {
    return (
        <TextField
        id="outlined"
        label="Ingrese su nombre de usuario"
        variant="outlined"
        style={{ width: "35vh", height: "10vh" }}
        />
    );
}

export default GuestTextField;