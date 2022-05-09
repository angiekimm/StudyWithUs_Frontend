import { Button, TextField } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import React from "react";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { blue } from "@mui/material/colors";

function Findpw() {
  return (
    <>
      <div className="findpw">
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
                비밀번호찾기
              </Typography>
              <TextField
                margin="normal"
                label="Email Address"
                required
                fullWidth
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                임시 비밀번호 보내기
              </Button>
              <Link to="/account/login">로그인으로 돌아가기</Link>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Findpw;
