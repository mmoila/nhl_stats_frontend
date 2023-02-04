import { Container } from "@mui/material"
import NavBar from "./components/NavBar"
import TeamTable from "./components/TeamTable"
import data from "./data.json"

function App() {
  return (
    <Container disableGutters className="App" maxWidth={false}>
      <NavBar />
      <Container sx={{ overflow: "auto", my: 5 }}>
        <TeamTable teams={data.teams} />
        <TeamTable />
      </Container>
    </Container>
  )
}

export default App
