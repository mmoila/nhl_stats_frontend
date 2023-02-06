import { Container } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import TeamTable from "./components/TeamTable"
import data from "./data.json"

function App() {
  return (
    <Container disableGutters className="App" maxWidth={false}>
      <NavBar />
      <Container sx={{ overflow: "auto", my: 5 }}>
        <Routes>
          <Route path="/" element={<div>front page</div>} />
          <Route path="/teams" element={<TeamTable teams={data.teams} />} />
        </Routes>
      </Container>
    </Container>
  )
}

export default App
