import { Typography, Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useQuery } from "react-query"
import { getTeam } from "../utils/requests"

const GameResultContainer = ({ homeID, awayID, scoreAway, scoreHome }) => {
  const homeTeamData = useQuery(["homeTeam", homeID], () => getTeam(homeID))
  const awayTeamData = useQuery(["awayTeam", awayID], () => getTeam(awayID))

  if (homeTeamData.isLoading || awayTeamData.isLoading) {
    return <div>Loading...</div>
  }
  if (homeTeamData.isError || awayTeamData.isError) {
    return <div>Error!</div>
  }

  const homeAbbreviation = homeTeamData.data[0].abbreviation
  const awayAbbreviation = awayTeamData.data[0].abbreviation

  return (
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
}

export default GameResultContainer
