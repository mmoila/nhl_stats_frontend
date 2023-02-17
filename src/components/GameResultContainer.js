import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

const GameResultContainer = ({ teamAway, scoreAway, teamHome, scoreHome }) => (
  <Grid container spacing={0}>
    <Grid xs={4} item>
      <Typography component="div">{teamHome}</Typography>
    </Grid>
    <Grid xs={4} item textAlign="center">
      <Typography component="div" variant="h6">
        {scoreHome} - {scoreAway}
      </Typography>
    </Grid>
    <Grid xs={4} item textAlign="right">
      <Typography component="div">{teamAway}</Typography>
    </Grid>
  </Grid>
)

export default GameResultContainer
