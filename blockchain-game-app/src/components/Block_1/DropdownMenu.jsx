import { useState } from "react";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import {
  Typography,
  Container,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Card,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const DropdownMnu = () => {
  const [t, i18n] = useTranslation("global");
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <Container
      sx={{
        marginTop: 0,
        display: "flex",
        right: 15,
        justifyContent: "right",
      }}
    >
      <ArrowDropDownCircleIcon
        sx={{
          textAlign: "right",
          color: "#000000",
          fontSize: "6vw",
          maxWidth: "40px",
          flex: "0 0 auto",
          "@media (max-width:600px)": {
            fontSize: "10vw",
            maxWidth: "80px",
          },
        }}
        onClick={handleClick}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ maxHeight: "32.5rem" }}
      >
        <MenuItem>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {Array.from({ length: 13 }, (_, i) =>
                  String.fromCharCode(65 + i * 2)
                ).map((char, i) => (
                  <TableRow key={char}>
                    <TableCell align="center" sx={{ bgcolor: "#e0ecfc" }}>
                      <strong>{char}</strong>
                    </TableCell>
                    <TableCell align="center">{65 + i * 2}</TableCell>
                    <TableCell align="center" sx={{ bgcolor: "#e0ecfc" }}>
                      <strong>{String.fromCharCode(66 + i * 2)}</strong>
                    </TableCell>
                    <TableCell align="center">{66 + i * 2}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default DropdownMnu;
