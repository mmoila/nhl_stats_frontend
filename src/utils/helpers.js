export const createTeamList = (teamData) => {
  const teams = teamData.map((data) => ({
    name: data.teamName,
    city: data.locationName,
    abbreviation: data.abbreviation,
  }))
  return teams
}

export const createTeamRecordList = (teamData) => {
  const teamRecords = teamData.records
    .map((records) => records.teamRecords)
    .reduce((a, b) => [...a, ...b])
    .map((records) => ({
      teamID: records.team.id,
      team: records.team.name,
      rank: parseInt(records.leagueRank, 10),
      points: records.points,
      wins: records.leagueRank.wins,
      losses: records.leagueRecord.losses,
      gamesPlayed: records.gamesPlayed,
    }))

  return teamRecords
}

export const createPlayerRecordList = (playerData) => {
  const playerRecords = playerData.map((data) => ({
    id: data.player.id,
    name: data.player.fullName,
    points: data.points,
    goals: data.stats.goals,
    assists: data.stats.assists,
  }))

  return playerRecords
}

export const createGameResultList = (gameData) => {
  const gameResults = gameData.map((data) => ({
    gameStatus: data.status.abstractGameState,
    homeID: data.teams.home.team.id,
    home: data.teams.home.team.name,
    homeScore: data.teams.home.score,
    awayID: data.teams.away.team.id,
    away: data.teams.away.team.name,
    awayScore: data.teams.away.score,
  }))

  return gameResults
}
