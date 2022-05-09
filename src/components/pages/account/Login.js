import {
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { blue } from "@mui/material/colors";

function Login() {
  return (
    <>
      <div className="login">
        <div className="container">
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: blue[700] }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                로그인
              </Typography>
              <TextField
                margin="normal"
                label="ID"
                required
                fullWidth
                name="id"
                autoComplete="id"
                autoFocus
              />
              <TextField
                margin="normal"
                label="Password"
                type="password"
                required
                fullWidth
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                로그인
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/account/findpw">비밀번호 찾기</Link>
                </Grid>
                <Grid>
                  <Link to="/account/signup">회원가입</Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Login;
