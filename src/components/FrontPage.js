import Grid from "@mui/material/Unstable_Grid2"
import { Stack } from "@mui/material"

import TeamTable from "./TeamTable"
import StatsTable from "./StatsTable"

const FrontPage = ({ teams }) => (
  <Grid container spacing={2}>
    <Grid item xs={8}>
      <TeamTable teams={teams} />
    </Grid>
    <Grid item xs={4}>
      <Stack spacing={1}>
        <StatsTable header="Team standings" teams={teams} />
        <StatsTable header="Team standings" teams={teams} />
      </Stack>
    </Grid>
  </Grid>
)

export default FrontPage
