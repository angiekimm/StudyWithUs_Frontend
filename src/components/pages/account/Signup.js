import {
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Signup() {
  const [state, setState] = useState({});
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // 회원가입 완료 모달창
  const [ModalOn, setModalOn] = useState(false);

  return (
    <>
      <div className="signup">
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
                회원가입
              </Typography>
              <TextField
                margin="normal"
                label="성명"
                required
                fullWidth
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                label="아이디"
                required
                fullWidth
                name="id"
                autoComplete="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <TextField
                margin="normal"
                label="비밀번호"
                type="password"
                required
                fullWidth
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                label="이메일"
                required
                fullWidth
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* 관심사 설정 추가하기 */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
                onClick={() => {
                  setState({ name, id, password, email });
                  setModalOn(true);
                }}
              >
                회원가입
              </Button>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Signup;
