import { Stack, Container, Divider, Skeleton, Alert } from "@mui/material"
import { useQuery } from "react-query"
import GameResultContainer from "./GameResultContainer"
import { getGameResults } from "../utils/requests"
import { createGameResultList } from "../utils/helpers"

const GameResultStack = () => {
  const result = useQuery("gameResults", getGameResults)

  if (result.isError) {
    return (
      <Alert severity="error" sx={{ height: 400 }}>
        Error fetching data
      </Alert>
    )
  }

  const gameResult = result.data ? createGameResultList(result.data) : null

  return !gameResult ? (
    <Skeleton variant="rectangular" height={600} />
  ) : (
    <Container sx={{ maxWidth: { sm: "60%" } }}>
      <Stack spacing={4} p={2} pb={4} divider={<Divider />}>
        {gameResult.map((res) => (
          <GameResultContainer
            key={res.home}
            scoreHome={res.homeScore}
            scoreAway={res.awayScore}
            homeAbbreviation={res.homeAbbreviation}
            awayAbbreviation={res.awayAbbreviation}
          />
        ))}
      </Stack>
    </Container>
  )
}

export default GameResultStack
