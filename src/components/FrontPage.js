import Grid from "@mui/material/Unstable_Grid2"
import { Paper, Stack, Typography, Skeleton } from "@mui/material"
import { useQuery } from "react-query"
import TeamStatsTable from "./TeamStatsTable"
import PlayerStatsTable from "./PlayerStatsTable"
import { createPlayerRecordList, createTeamRecordList } from "../utils/helpers"
import { getPlayerStandings, getTeamStandings } from "../utils/requests"
import GameResultStack from "./GameResultStack"

const FrontPage = () => {
  const teamStandingsData = useQuery("teamStandingsData", getTeamStandings)
  const playerStandigsData = useQuery("playerStandingsData", getPlayerStandings)

  const teamStats =
    teamStandingsData.isLoading || teamStandingsData.isError
      ? null
      : createTeamRecordList(teamStandingsData.data)

  const playerStats =
    playerStandigsData.isLoading || playerStandigsData.isError
      ? null
      : createPlayerRecordList(playerStandigsData.data)

  return (
    <Grid disableEqualOverflow container spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper component="div">
          <Typography
            p={2}
            variant="h6"
            id="tableTitle"
            component="div"
            textAlign="center"
          >
            Game Results From Yesterday
          </Typography>
          <GameResultStack />
        </Paper>
      </Grid>
      <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <Stack spacing={1}>
          {teamStats ? (
            <TeamStatsTable header="Team standings" teams={teamStats} />
          ) : (
            <Skeleton variant="rectangular" height={400} />
          )}
          {playerStats ? (
            <PlayerStatsTable header="Player standings" players={playerStats} />
          ) : (
            <Skeleton variant="rectangular" height={400} />
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: { md: "none" } }}>
        {teamStats ? (
          <TeamStatsTable header="Team standings" teams={teamStats} />
        ) : (
          <Skeleton variant="rectangular" height={400} />
        )}
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: { md: "none" } }}>
        {playerStats ? (
          <PlayerStatsTable header="Player standings" players={playerStats} />
        ) : (
          <Skeleton variant="rectangular" height={400} />
        )}
      </Grid>
    </Grid>
  )
}

export default FrontPage
