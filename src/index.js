import React from "react"
import ReactDOM from "react-dom/client"
import CssBaseline from "@mui/material/CssBaseline"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <CssBaseline>
      <Router>
        <App />
      </Router>
    </CssBaseline>
  </React.StrictMode>
)
