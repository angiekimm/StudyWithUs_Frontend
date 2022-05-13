import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Avatar } from "@mui/material";
import CompleteModal from "../../modals/CompleteModal";

const MyInfo = () => {
  // 프로필 사진 미리보기
  const [preview, setPreview] = useState();

  const [func, setFunc] = useState("수정");

  const insertImg = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewUrl = reader.result;

      if (previewUrl) {
        setPreview(previewUrl);
      }
    };
  };

  // 프로필 사진 미리보기에서 삭제
  const deleteImg = () => {
    setPreview(null);
  };

  // 변경이 완료되었습니다 모달창
  const [completeModalOn, setCompleteModalOn] = useState(false);

  return (
    <>
      <CompleteModal
        show={completeModalOn}
        onHide={() => setCompleteModalOn(false)}
        func={func}
      />
      <section className="myinfo">
        <div className="container">
          <div className="heading topMargin">
            <h3>My Info</h3>
            <h1>My Info</h1>
          </div>
          <div className="contain topMargin flex">
            <div className="left">
              <TextField
                margin="normal"
                label="아이디"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                name="id"
                autoComplete="id"
                autoFocus
              />
              <TextField
                margin="normal"
                label="비밀번호"
                type="password"
                required
                fullWidth
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                label="이름"
                required
                fullWidth
                id="name"
                autoComplete="name"
              />
              <TextField
                margin="normal"
                label="email"
                type="email"
                required
                fullWidth
                id="email"
                autoComplete="email"
              />
              <div className="topMargin">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => setCompleteModalOn(true)}
                >
                  수정
                </Button>
              </div>
            </div>
            <div className="card right">
              <div className="profile">
                <Avatar
                  sx={{ width: 200, height: 200 }}
                  src={
                    preview
                      ? preview
                      : "https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
                  }
                />
                <Button onClick={deleteImg}>삭제</Button>
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => insertImg(e)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyInfo;
