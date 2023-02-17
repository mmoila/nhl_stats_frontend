import { Stack, Typography, Container } from "@mui/material"
import { useQuery } from "react-query"
import GameResultContainer from "./GameResultContainer"
import { getGameResults } from "../utils/requests"
import { createGameResultList } from "../utils/helpers"

const GameResultStack = () => {
  const result = useQuery("gameResults", getGameResults)

  if (result.isLoading) {
    return <div>Loading...</div>
  }
  if (result.isError) {
    return <div>Error occurred</div>
  }
  const gameResult = result.data ? createGameResultList(result.data) : null

  if (!gameResult) {
    return null
  }

  return (
    <Container>
      <Typography
        p={2}
        variant="h6"
        id="tableTitle"
        component="div"
        textAlign="center"
      >
        Game Results From Yesterday
      </Typography>
      <Stack direction="row" sx={{ justifyContent: "center" }} p={4}>
        <Stack spacing={4}>
          {gameResult.map((res) => (
            <GameResultContainer
              key={res.home}
              team={res.home}
              score={res.homeScore}
            />
          ))}
        </Stack>
        <Stack spacing={4}>
          {gameResult.map((res) => (
            <GameResultContainer
              key={res.away}
              team={res.away}
              score={res.awayScore}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export default GameResultStack
