import React from "react"
import ReactDOM from "react-dom/client"
import CssBaseline from "@mui/material/CssBaseline"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import { QueryClient, QueryClientProvider } from "react-query"
import App from "./App"
import theme from "./theme"

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <CssBaseline>
      <Router>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ThemeProvider>
      </Router>
    </CssBaseline>
  </React.StrictMode>
)
