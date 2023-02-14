import Grid from "@mui/material/Unstable_Grid2"
import { Paper, Stack } from "@mui/material"
import { useQuery } from "react-query"
import TeamStatsTable from "./TeamStatsTable"
import PlayerStatsTable from "./PlayerStatsTable"
import { createPlayerRecordList, createTeamRecordList } from "../utils/helpers"
import { getPlayerStandings, getTeamStandings } from "../utils/requests"

const FrontPage = () => {
  const teamStandingsData = useQuery("teamStandingsData", getTeamStandings)
  const playerStandigsData = useQuery("playerStandingsData", getPlayerStandings)
  console.log(playerStandigsData)

  const teamStats = teamStandingsData.isLoading
    ? null
    : createTeamRecordList(teamStandingsData.data)

  const playerStats = playerStandigsData.isLoading
    ? null
    : createPlayerRecordList(playerStandigsData.data)

  if (!teamStats || !playerStats) {
    return null
  }

  return (
    <Grid disableEqualOverflow container spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper
          sx={{
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightGrey",
          }}
        >
          live results here...
        </Paper>
      </Grid>
      <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <Stack spacing={1}>
          <TeamStatsTable header="Team standings" teams={teamStats} />
          <PlayerStatsTable header="Player standings" players={playerStats} />
        </Stack>
      </Grid>
      <Grid item xs={6} sx={{ display: { md: "none" } }}>
        <TeamStatsTable header="Team standings" teams={teamStats} />
      </Grid>
      <Grid item xs={6} sx={{ display: { md: "none" } }}>
        <PlayerStatsTable header="Player standings" players={playerStats} />
      </Grid>
    </Grid>
  )
}

export default FrontPage
