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
  }))

  return playerRecords
}
