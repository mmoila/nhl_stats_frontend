import { getTeamStandings as getTeamStandingsData, getTeam } from "../requests"
import { createTeamRecordList } from "../helpers"

export const getAllStandings = async () => {
  const standingsData = await getTeamStandingsData()
  const teamStandings = createTeamRecordList(standingsData)
  return Promise.all(
    teamStandings.map(async (team) => {
      const teamDetails = await getTeam(team.teamID)
      return {
        ...team,
        abbreviation: teamDetails[0].abbreviation,
      }
    })
  )
}

export const getDivisionStandings = async (divisionIds) => {
  const standingsData = await getTeamStandingsData()
  const teamStandings = createTeamRecordList(standingsData, divisionIds)
  return Promise.all(
    teamStandings.map(async (team) => {
      const teamDetails = await getTeam(team.teamID)
      return {
        ...team,
        abbreviation: teamDetails[0].abbreviation,
      }
    })
  )
}

export default getAllStandings
