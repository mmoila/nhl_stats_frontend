import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Typography, TableSortLabel, Container } from "@mui/material"
import { useState } from "react"

export default function TeamTable({ teams }) {
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("Abbreviation")

  if (!teams) {
    return null
  }

  function descendingComparator(a, b, orderingBy) {
    if (b[orderingBy] < a[orderingBy]) {
      return -1
    }
    if (b[orderingBy] > a[orderingBy]) {
      return 1
    }
    return 0
  }

  function getComparator(criteria, orderingBy) {
    return criteria === "desc"
      ? (a, b) => descendingComparator(a, b, orderingBy)
      : (a, b) => -descendingComparator(a, b, orderingBy)
  }

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ my: 5, maxWidth: "sm", mx: "auto" }}
    >
      <Typography p={2} variant="h6" id="tableTitle" component="div">
        Teams
      </Typography>
      <Table sx={{ maxWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Abbreviation
              <TableSortLabel
                active
                direction={order}
                onClick={() => handleRequestSort("abbreviation")}
              />
            </TableCell>
            <TableCell>City</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams
            .slice()
            .sort(getComparator(order, orderBy))
            .map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      src={`https://assets.nhle.com/logos/nhl/svg/${row.abbreviation}_light.svg`}
                      width="50px"
                      height="auto"
                      alt="logo"
                    />
                    {row.abbreviation}
                  </Container>
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
