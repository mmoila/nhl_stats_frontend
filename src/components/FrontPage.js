import Grid from "@mui/material/Unstable_Grid2"
import { Paper, Stack } from "@mui/material"

import TeamStatsTable from "./TeamStatsTable"
import PlayerStatsTable from "./PlayerStatsTable"
import { playerStats, teamStats } from "../data"

const FrontPage = () => (
  <Grid disableEqualOverflow container spacing={2}>
    <Grid item xs={8}>
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
    <Grid item xs={4}>
      <Stack spacing={1}>
        <TeamStatsTable header="Team standings" teams={teamStats} />
        <PlayerStatsTable header="Player standings" players={playerStats} />
      </Stack>
    </Grid>
  </Grid>
)

export default FrontPage
