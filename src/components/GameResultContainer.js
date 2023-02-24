import { Typography, Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

const GameResultContainer = ({
  scoreAway,
  scoreHome,
  homeAbbreviation,
  awayAbbreviation,
}) => (
  <Container>
    <Grid container>
      <Grid xs={4} item>
        <img
          src={`https://assets.nhle.com/logos/nhl/svg/${homeAbbreviation}_light.svg`}
          width="50px"
          height="auto"
          alt="home_logo"
        />
      </Grid>
      <Grid xs={4} item textAlign="center">
        <Typography component="div" variant="h5">
          {scoreHome} - {scoreAway}
        </Typography>
      </Grid>
      <Grid xs={4} item textAlign="right">
        <img
          src={`https://assets.nhle.com/logos/nhl/svg/${awayAbbreviation}_light.svg`}
          width="50px"
          height="auto"
          alt="away_logo"
        />
      </Grid>
    </Grid>
  </Container>
)

export default GameResultContainer
