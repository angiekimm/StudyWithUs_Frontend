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

function FindID() {
  // 넘길 데이터 저장
  const [state, setState] = useState({});
  // 받을 데이터가 object면 useState 안에 {key: []}
  const [data, setData] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    call("/findID", "POST", state).then((response) => {
      setData(response);
      console.log(data);
    });
  }, [state]);

  // 아이디 알려주는 모달창
  const [ModalOn, setModalOn] = useState(false);

  return (
    <>
      <AccountModal
        show={ModalOn}
        onHide={() => setModalOn(false)}
        data={data}
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
                아이디찾기
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
                onClick={() => {
                  setState({ name, email });
                  setModalOn(true);
                }}
              >
                아이디 찾기
              </Button>
              <Link to="/account/login">로그인으로 돌아가기</Link>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
}

export default FindID;
