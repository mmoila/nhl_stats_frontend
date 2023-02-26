import Grid from "@mui/material/Unstable_Grid2"
import { Paper, Stack, Typography, Skeleton } from "@mui/material"
import { useQuery } from "react-query"
import TeamStatsTable from "./TeamStatsTable"
import PlayerStatsTable from "./PlayerStatsTable"
import getPlayerStandings from "../utils/services/players"
import GameResultStack from "./GameResultStack"
import { getTeamStandings } from "../utils/services/teams"

const FrontPage = () => {
  const teamStandings = useQuery("teamStandingsData", getTeamStandings)
  const playerStandings = useQuery("playerStandingsData", getPlayerStandings)

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
          {teamStandings.isLoading ? (
            <Skeleton variant="rectangular" height={400} />
          ) : (
            <TeamStatsTable
              header="Team standings"
              teams={teamStandings.data}
            />
          )}
          {playerStandings.isLoading ? (
            <Skeleton variant="rectangular" height={400} />
          ) : (
            <PlayerStatsTable
              header="Player standings"
              players={playerStandings.data}
            />
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: { md: "none" } }}>
        {teamStandings.isLoading ? (
          <Skeleton variant="rectangular" height={400} />
        ) : (
          <TeamStatsTable header="Team standings" teams={teamStandings.data} />
        )}
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: { md: "none" } }}>
        {playerStandings.isLoading ? (
          <Skeleton variant="rectangular" height={400} />
        ) : (
          <PlayerStatsTable
            header="Player standings"
            players={playerStandings.data}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default FrontPage
