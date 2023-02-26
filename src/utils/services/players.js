import {
  getPlayerStandings as getPlayerStandingsData,
  getPlayerStats,
} from "../requests"
import { createPlayerRecordList } from "../helpers"

const getPlayerStandings = async () => {
  const playerData = await getPlayerStandingsData()

  const playerStandings = await Promise.all(
    playerData.map(async (data) => ({
      ...data,
      stats: await getPlayerStats(data.player.id),
    }))
  )

  return createPlayerRecordList(playerStandings)
}

export default getPlayerStandings
