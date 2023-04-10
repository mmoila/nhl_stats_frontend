import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Typography, Alert } from "@mui/material"

export default function StatsTable({
  header,
  teams,
  totalRank = true,
  elevation = 1,
}) {
  if (!teams) {
    return (
      <Alert severity="error" sx={{ height: 400 }}>
        Error fetching data
      </Alert>
    )
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

  return (
    <TableContainer
      component={Paper}
      elevation={elevation}
      sx={{ maxWidth: "sm" }}
    >
      <Typography p={2} variant="h6" id="tableTitle" component="div">
        {header}
      </Typography>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow sx={{ "& > *": { padding: 0.35 } }}>
            <TableCell padding="none" align="center">
              Rank
            </TableCell>
            <TableCell padding="none" align="center">
              Team
            </TableCell>
            <TableCell padding="none" align="center">
              P
            </TableCell>
            <TableCell padding="none" align="center">
              W
            </TableCell>
            <TableCell padding="none" align="center">
              L
            </TableCell>
            <TableCell padding="none" align="center">
              OT
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams
            .slice()
            .sort(getComparator("asc", "rank"))
            .slice(0, 10)
            .map((row) => {
              const key = row.team ? row.team.replaceAll(" ", "") : null
              if (!key) {
                console.log(row)
              }
              return (
                <TableRow key={key}>
                  <TableCell sx={{ paddingX: 0.25 }} align="center">
                    {totalRank ? row.rank : row.divisionRank}
                  </TableCell>
                  <TableCell sx={{ paddingX: 0.25 }} align="center">
                    <img
                      src={`https://assets.nhle.com/logos/nhl/svg/${row.abbreviation}_light.svg`}
                      width="50px"
                      height="auto"
                      alt={row.team}
                      align="center"
                    />
                  </TableCell>
                  <TableCell sx={{ paddingX: 0.75 }} align="center">
                    {row.points}
                  </TableCell>
                  <TableCell sx={{ paddingX: 0.75 }} align="center">
                    {row.wins}
                  </TableCell>
                  <TableCell sx={{ paddingX: 0.75 }} align="center">
                    {row.losses}
                  </TableCell>
                  <TableCell sx={{ paddingX: 0.75 }} align="center">
                    {row.overtime}
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
