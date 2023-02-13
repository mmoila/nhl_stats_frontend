import { Container } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import FrontPage from "./components/FrontPage"
import NavBar from "./components/NavBar"
import TeamTable from "./components/TeamTable"

function App() {
  return (
    <Container disableGutters className="App" maxWidth={false}>
      <NavBar />
      <Container sx={{ overflow: "auto", my: 5 }}>
        <Routes>
          <Route path="/nhl_stats_frontend" element={<FrontPage />} />
          <Route path="/nhl_stats_frontend/teams" element={<TeamTable />} />
        </Routes>
      </Container>
    </Container>
  )
}

export default App
