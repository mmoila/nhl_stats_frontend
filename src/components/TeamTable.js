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
import { useQuery } from "react-query"
import { getTeams } from "../utils/requests"
import { createTeamList } from "../utils/helpers"

export default function TeamTable() {
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("abbreviation")

  const teamData = useQuery("teamData", getTeams)

  const teams =
    teamData.isLoading || teamData.isError
      ? null
      : createTeamList(teamData.data)

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
      <Table sx={{ maxWidth: "sm" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Abbreviation
              <TableSortLabel
                active={orderBy === "abbreviation"}
                direction={order}
                onClick={() => handleRequestSort("abbreviation")}
              />
            </TableCell>
            <TableCell>
              City
              <TableSortLabel
                active={orderBy === "city"}
                direction={order}
                onClick={() => handleRequestSort("city")}
              />
            </TableCell>
            <TableCell>
              Name
              <TableSortLabel
                active={orderBy === "name"}
                direction={order}
                onClick={() => handleRequestSort("name")}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams
            .slice()
            .sort(getComparator(order, orderBy))
            .map((team) => (
              <TableRow key={team.name}>
                <TableCell size="small" sx={{ paddingLeft: 0 }}>
                  <Container
                    maxWidth="xs"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={`https://assets.nhle.com/logos/nhl/svg/${team.abbreviation}_light.svg`}
                      width="50px"
                      height="auto"
                      alt="logo"
                    />
                    {team.abbreviation}
                  </Container>
                </TableCell>
                <TableCell>{team.city}</TableCell>
                <TableCell>{team.name}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
