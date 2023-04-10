export const createTeamList = (teamData) => {
  const teams = teamData.map((data) => ({
    name: data.teamName,
    city: data.locationName,
    abbreviation: data.abbreviation,
  }))
  return teams
}

export const createTeamRecordList = (
  teamData,
  conferenceIds = [15, 16, 17, 18]
) => {
  const teamRecords = teamData.records
    .filter((records) => conferenceIds.includes(records.division.id))
    .map((records) => records.teamRecords)
    .reduce((a, b) => [...a, ...b])
    .map((records) => ({
      teamID: records.team.id,
      team: records.team.name,
      rank: parseInt(records.leagueRank, 10),
      divisionRank: parseInt(records.divisionRank, 10),
      points: records.points,
      wins: records.leagueRecord.wins,
      losses: records.leagueRecord.losses,
      overtime: records.leagueRecord.ot,
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
    homeAbbreviation: data.teams.home.team[0].abbreviation,
    home: data.teams.home.team[0].name,
    homeScore: data.teams.home.score,
    awayAbbreviation: data.teams.away.team[0].abbreviation,
    away: data.teams.away.team[0].name,
    awayScore: data.teams.away.score,
  }))

  return gameResults
}
