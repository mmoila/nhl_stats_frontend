import {
  Stack,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material"
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
      <Stack spacing={4} p={2} pb={4}>
        {gameResult.map((res) => (
          <GameResultContainer
            key={res.home}
            teamHome={res.home}
            scoreHome={res.homeScore}
            teamAway={res.away}
            scoreAway={res.awayScore}
          />
        ))}
      </Stack>
    </Container>
  )
}

export default GameResultStack
