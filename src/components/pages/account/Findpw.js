import { Button, TextField } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { blue } from "@mui/material/colors";
import { call } from "../../../service/ApiService";
import AccountModal from "../../modals/\bAccountModal";

function Findpw() {
  // 데이터 받아오기 테스트
  const [state, setState] = useState({});
  const [data, setData] = useState();
  const [comment, setComment] = useState(
    "임시 비밀번호를 이메일로 보내드렸습니다. 확인 후 로그인 바랍니다."
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    call("/findPW", "POST", state).then((response) => {
      setData(response);
    });
  }, [state]);

  const [ModalOn, setModalOn] = useState(false);

  return (
    <>
      <AccountModal
        show={ModalOn}
        onHide={() => setModalOn(false)}
        comment={comment}
      />
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
                label="이름"
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
                label="이메일"
                required
                fullWidth
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                label="아이디"
                required
                fullWidth
                name="id"
                autoComplete="id"
                autoFocus
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
                onClick={() => {
                  setState({ name, email, id });
                  setModalOn(true);
                }}
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
