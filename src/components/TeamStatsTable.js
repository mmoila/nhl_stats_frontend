import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Typography } from "@mui/material"

export default function StatsTable({ header, teams }) {
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

  return (
    <TableContainer component={Paper} sx={{ maxWidth: "sm", mx: "auto" }}>
      <Typography p={2} variant="h6" id="tableTitle" component="div">
        {header}
      </Typography>
      <Table sx={{ maxWidth: "sm" }} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell>P</TableCell>
            <TableCell>W</TableCell>
            <TableCell>L</TableCell>
            <TableCell>OT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams
            .slice()
            .sort(getComparator("desc", "points"))
            .slice(0, 10)
            .map((row) => {
              const key = row.team ? row.team.replaceAll(" ", "") : null
              if (!key) {
                console.log(row)
              }
              return (
                <TableRow key={key}>
                  <TableCell>
                    <img
                      src={`https://assets.nhle.com/logos/nhl/svg/${row.abbreviation}_light.svg`}
                      width="50px"
                      height="auto"
                      alt={row.team}
                    />
                  </TableCell>
                  <TableCell>{row.points}</TableCell>
                  <TableCell>{row.wins}</TableCell>
                  <TableCell>{row.losses}</TableCell>
                  <TableCell>{row.overtime}</TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
