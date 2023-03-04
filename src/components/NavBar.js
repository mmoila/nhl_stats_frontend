import * as React from "react"
import { Link as RouterLink } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import HomeIcon from "@mui/icons-material/Home"
import LoginPopover from "./LoginPopover"

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component={RouterLink}
            to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Button component={RouterLink} to="/teams" color="inherit">
              Teams
            </Button>
          </Box>
          <LoginPopover />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
