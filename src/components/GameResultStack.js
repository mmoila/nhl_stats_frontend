import { Stack, Container, Box, CircularProgress } from "@mui/material"
import { useQuery } from "react-query"
import GameResultContainer from "./GameResultContainer"
import { getGameResults } from "../utils/requests"
import { createGameResultList } from "../utils/helpers"

const GameResultStack = () => {
  const result = useQuery("gameResults", getGameResults)

  if (result.isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    )
  }
  if (result.isError) {
    return <div>Error occurred</div>
  }
  const gameResult = result.data ? createGameResultList(result.data) : null

  if (!gameResult) {
    return null
  }

  return (
    <Container sx={{ maxWidth: { sm: "60%" } }}>
      <Stack spacing={4} p={2} pb={4}>
        {gameResult.map((res) => (
          <GameResultContainer
            key={res.home}
            scoreHome={res.homeScore}
            scoreAway={res.awayScore}
            homeID={res.homeID}
            awayID={res.awayID}
          />
        ))}
      </Stack>
    </Container>
  )
}

export default GameResultStack
