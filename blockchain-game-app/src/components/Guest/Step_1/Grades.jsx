import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Container,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Grades = ({ grades }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <Container
      sx={{
        marginLeft: 0,
        marginTop: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">{t("Grades.title")}</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>
                {t("Grades.subject")}
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                {t("Grades.grade")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {grades.map((grade, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {grade.subject}
                </TableCell>
                <TableCell>{grade.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default Grades;
