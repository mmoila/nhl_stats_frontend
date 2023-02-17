import { Stack, Box, Container } from "@mui/material"

const GameResultContainer = ({ team, score }) => (
  <Container component="div">
    <Stack sx={{ justifyContent: "space-between" }} direction="row" spacing={2}>
      <Box>{team}</Box>
      <Box>{score}</Box>
    </Stack>
  </Container>
)

export default GameResultContainer
