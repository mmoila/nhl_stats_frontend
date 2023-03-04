import {
  Container,
  Box,
  Button,
  Popover,
  TextField,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"

const LoginPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = (data) => {
    setAnchorEl(null)
    reset()
    console.log(data)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    reset()
  }

  const open = Boolean(anchorEl)

  return (
    <Box>
      <Button onClick={handleClick} color="inherit">
        Login
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Container
          id="loginContainer"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 250,
            padding: 4,
            justifyContent: "center",
          }}
        >
          <Typography pb={2} variant="h6" textAlign="center">
            Login here
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Controller
              name="username"
              control={control}
              required
              rules={{ minLength: 5, maxLength: 20, required: "true" }}
              error={() => {
                setError("username", { type: "focus" }, { shouldFocus: true })
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  error={!!errors.username}
                  helperText={
                    errors.username
                      ? "Username must be between 5 and 20 characters"
                      : ""
                  }
                  placeholder="username"
                  onChange={field.onChange}
                  sx={{ paddingBottom: 1 }}
                  inputRef={field.ref}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ minLength: 8, maxLength: 25, required: "true" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  error={!!errors.password}
                  helperText={
                    errors.password
                      ? "Password must be between 8 and 25 characters"
                      : ""
                  }
                  placeholder="password"
                  onChange={field.onChange}
                  type="password"
                  sx={{ paddingBottom: 1 }}
                />
              )}
            />
            <Button sx={{ marginTop: 2 }} variant="outlined" type="submit">
              Login
            </Button>
          </form>
        </Container>
      </Popover>
    </Box>
  )
}

export default LoginPopover
