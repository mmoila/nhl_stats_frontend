import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Typography, TableSortLabel } from "@mui/material"
import { useState } from "react"

export default function TeamTable({ teams }) {
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("Abbreviation")

  if (!teams) {
    return null
  }
  /*
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }
*/
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
    console.log(orderBy)
  }

  return (
    <TableContainer component={Paper} sx={{ my: 5 }}>
      <Typography p={2} variant="h6" id="tableTitle" component="div">
        Teams
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Abbreviation
              <TableSortLabel
                active
                direction={order}
                onClick={() => handleRequestSort("Abbreviation")}
              />
            </TableCell>
            <TableCell>City</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.abbreviation}
              </TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
