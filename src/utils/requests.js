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

export const getPlayerStandings = () => {
  const url =
    process.env.NODE_ENV === "development"
      ? `player-stats/rest/en/leaders/skaters/points?cayenneExp=season=${season}`
      : `https://cekvpxev6a.execute-api.eu-north-1.amazonaws.com/player-stats`

  return axios
    .get(url)
    .then((res) => res.data.data)
    .catch((error) => error)
}

export const getGameResults = () => {
  let date = new Date()
  date.setDate(date.getDate() - 1)
  // eslint-disable-next-line prefer-destructuring
  date = date.toISOString().split("T")[0]
  console.log(date)
  return axios
    .get(`${statsApiUrl}/schedule?date=${date}`)
    .then((res) => res.data.dates[0].games)
    .catch((error) => error)
}
