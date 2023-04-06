import React from "react";
import { Box, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const NavigationArrows = ({ usersData, actualLink }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100px",
      }}
    >
      <IconButton sx={{ color: "black" }}>
        <NavigateBeforeIcon sx={{ fontSize: "40px" }} />
      </IconButton>
      <IconButton sx={{ color: "black" }}>
        <NavigateNextIcon sx={{ fontSize: "40px" }} />
      </IconButton>
    </Box>
  );
};

export default NavigationArrows;
