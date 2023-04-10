import axios from "axios"

const statsApiUrl = "https://statsapi.web.nhl.com/api/v1"
const season = "20222023"

export const getTeam = (teamID) =>
  axios
    .get(`${statsApiUrl}/teams/${teamID}`)
    .then((res) => res.data.teams)
    .catch((error) => error)

export const getTeams = async () =>
  axios
    .get(`${statsApiUrl}/teams`)
    .then((res) => res.data.teams)
    .catch((error) => error)

export const getTeamStandings = () =>
  axios
    .get(`${statsApiUrl}/standings`)
    .then((res) => res.data)
    .catch((error) => error)

export const getPlayerStats = (playerID) =>
  axios
    .get(
      `${statsApiUrl}/people/${playerID}/stats?stats=statsSingleSeason&season=${season}`
    )
    .then((res) => res.data.stats[0].splits[0].stat)
    .catch((error) => error)

export const getPlayerStandings = async () => {
  const url =
    process.env.NODE_ENV === "development"
      ? `player-stats/rest/en/leaders/skaters/points?cayenneExp=season=${season}`
      : `https://cekvpxev6a.execute-api.eu-north-1.amazonaws.com/player-stats`

  const playerData = await axios.get(url)
  return playerData.data.data
}

const getDate = (dateOffset = 0) => {
  let date = new Date()
  date.setDate(date.getDate() + dateOffset)
  // eslint-disable-next-line prefer-destructuring
  date = date.toISOString().split("T")[0]
  return date
}

const teamIdsToGameResults = (resultData) =>
  Promise.all(
    resultData.map(async (game) => ({
      ...game,
      teams: {
        ...game.teams,
        away: {
          ...game.teams.away,
          team: await getTeam(game.teams.away.team.id),
        },
        home: {
          ...game.teams.home,
          team: await getTeam(game.teams.home.team.id),
        },
      },
    }))
  )

export const getGameResults = async () => {
  const date = getDate(-1)

  try {
    const resultData = await (
      await axios.get(`${statsApiUrl}/schedule?date=${date}`)
    ).data.dates[0].games

    const gameResults = await teamIdsToGameResults(resultData)
    return gameResults
  } catch (error) {
    return new Error("Unable to get game schedule data")
  }
}
