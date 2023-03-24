import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [t, i18n] = useTranslation("global");

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
    
  };


  return (
    <AppBar position="fixed" sx={{ bgcolor: "#1e1e1e" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ flexGrow: 1, textAlign: "center" }}>
          The blockchain game
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleLanguageClick}
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LanguageIcon />
        </IconButton>
        <Typography variant="h6" sx={{marginLeft: '0.7rem'}}>
          {i18n.language.toString().toUpperCase()}
        </Typography>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleLanguageClose}
        >
          <MenuItem onClick={() => i18n.changeLanguage("es")}>Español</MenuItem>
          <MenuItem onClick={() => i18n.changeLanguage("en")}>English</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
