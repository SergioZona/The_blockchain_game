import { TableCell, TableRow } from "@mui/material";
import React from "react";

const InitialHash = () => {
  return (
    <TableRow style={{ backgroundColor: "#FFFFFF", maxWidth: "30px" }}>
      <TableCell
        align="center"
        style={{
          borderLeft: "1px solid #000",
          borderBottom: "1px solid #000",
        }}
      ></TableCell>
      <TableCell
        align="center"
        style={{ borderBottom: "1px solid #000" }}
      ></TableCell>
      <TableCell
        align="center"
        style={{ borderBottom: "1px solid #000" }}
      ></TableCell>
      <TableCell
        align="center"
        style={{ borderBottom: "1px solid #000" }}
      ></TableCell>
      <TableCell
        align="center"
        style={{ borderBottom: "1px solid #000" }}
      ></TableCell>
      <TableCell
        align="center"
        style={{ borderBottom: "1px solid #000" }}
      ></TableCell>
      <TableCell
        align="center"
        style={{
          border: "1px solid #000",
          backgroundColor: "#FFC300",
        }}
      >
        <strong>212</strong>
      </TableCell>
    </TableRow>
  );
};

export default InitialHash;
