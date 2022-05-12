import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";

const rows = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["", "0", "Del"],
];
export default function Keypad(props) {
  const { setValue, value } = props;
  const handleNumberClick = (num) => {
    if (num == "Del") {
      const updatedValue = ~~(value / 10);
      updatedValue > 0 ? setValue(updatedValue) : setValue("");
    } else {
      const updatedValue = value + num;
      setValue(updatedValue);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.map((r) => (
                <TableCell
                  align="center"
                  sx={{ maxWidth: "8px", cursor: "pointer" }}
                  onClick={() => {
                    handleNumberClick(r);
                  }}
                >
                  {r == "Del" ? <BackspaceOutlinedIcon /> : r}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
