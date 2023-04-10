import Grid from "@mui/material/Unstable_Grid2"
import { Paper, Stack, Typography, Skeleton, Container } from "@mui/material"
import { useQuery } from "react-query"
import TeamStatsTable from "./TeamStatsTable"
import PlayerStatsTable from "./PlayerStatsTable"
import getPlayerStandings from "../utils/services/players"
import GameResultStack from "./GameResultStack"
import { getAllStandings, getDivisionStandings } from "../utils/services/teams"
import ConferenceStatsContainer from "./ConferenceStatsContainer"

const FrontPage = () => {
  const teamStandings = useQuery("teamStandingsData", getAllStandings)
  const playerStandings = useQuery("playerStandingsData", getPlayerStandings)
  const pacificStandings = useQuery("pacificStandingsData", () =>
    getDivisionStandings([15])
  )
  const centralStandings = useQuery("centralStandingsData", () =>
    getDivisionStandings([16])
  )
  const atlanticStandings = useQuery("atlanticStandingsData", () =>
    getDivisionStandings([17])
  )
  const metropolitanStandings = useQuery("metropolitanStandingsData", () =>
    getDivisionStandings([18])
  )

  return (
    <Grid disableEqualOverflow container spacing={2}>
      <Grid item xs={12} md={8}>
        <Stack spacing={2}>
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
          <Container
            disableGutters
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Paper sx={{ width: "48%" }}>
              {pacificStandings.isLoading ? (
                <Skeleton variant="rectangular" height={400} />
              ) : (
                <ConferenceStatsContainer
                  ConferenceName="Western Conference"
                  firstDivName="Pacific Division"
                  secondDivName="Central Division"
                  firstDivision={pacificStandings}
                  secondDivision={centralStandings}
                />
              )}
            </Paper>

            <Paper sx={{ width: "48%" }}>
              {pacificStandings.isLoading ? (
                <Skeleton variant="rectangular" height={400} />
              ) : (
                <ConferenceStatsContainer
                  ConferenceName="Eastern Conference"
                  firstDivName="Atlantic Division"
                  secondDivName="Metropolitan Division"
                  firstDivision={atlanticStandings}
                  secondDivision={metropolitanStandings}
                />
              )}
            </Paper>
          </Container>
        </Stack>
      </Grid>
      <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <Stack spacing={1}>
          {teamStandings.isLoading ? (
            <Skeleton variant="rectangular" height={400} />
          ) : (
            <TeamStatsTable
              header="Total Team Standings"
              teams={teamStandings.data}
            />
          )}
          {playerStandings.isLoading ? (
            <Skeleton variant="rectangular" height={400} />
          ) : (
            <PlayerStatsTable
              header="Player Standings"
              players={playerStandings.data}
            />
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: { md: "none" } }}>
        {teamStandings.isLoading ? (
          <Skeleton variant="rectangular" height={400} />
        ) : (
          <TeamStatsTable
            header="Total Team Standings"
            teams={teamStandings.data}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: { md: "none" } }}>
        {playerStandings.isLoading ? (
          <Skeleton variant="rectangular" height={400} />
        ) : (
          <PlayerStatsTable
            header="Player Standings"
            players={playerStandings.data}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ display: { md: "none" } }}>
        {pacificStandings.isLoading ? (
          <Skeleton variant="rectangular" height={400} />
        ) : (
          <ConferenceStatsContainer
            ConferenceName="Western Conference"
            firstDivName="Pacific Division"
            secondDivName="Central Division"
            firstDivision={pacificStandings}
            secondDivision={centralStandings}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: { md: "none" } }}>
        {pacificStandings.isLoading ? (
          <Skeleton variant="rectangular" height={400} />
        ) : (
          <ConferenceStatsContainer
            ConferenceName="Eastern Conference"
            firstDivName="Atlantic Division"
            secondDivName="Metropolitan Division"
            firstDivision={atlanticStandings}
            secondDivision={metropolitanStandings}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default FrontPage
