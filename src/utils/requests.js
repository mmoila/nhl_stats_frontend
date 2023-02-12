import axios from "axios"

const statsApiUrl = "https://statsapi.web.nhl.com/api/v1"
const season = "20222023"

export const getTeams = () =>
  axios
    .get(`${statsApiUrl}/teams`)
    .then((res) => res.data.teams)
    .catch((error) => error)

export const getTeamStandings = () =>
  axios
    .get(`${statsApiUrl}/standings`)
    .then((res) => res.data)
    .catch((error) => error)

export const getPlayerStandings = () =>
  axios
    .get(
      `player-stats/rest/en/leaders/skaters/points?cayenneExp=season=${season}`
    )
    .then((res) => res.data.data)
    .catch((error) => error)
