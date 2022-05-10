import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import CompleteModal from "../../modals/CompleteModal";

const CreateStudy = () => {
  const [preview, setPreview] = useState();
  const [func, setFunc] = useState("생성");

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
      <section className="myinfo createstudy">
        <div className="container">
          <div className="heading topMargin">
            <h3>Create Stydy Group</h3>
            <h1>스터디 만들기 📖</h1>
          </div>
          <div className="contain topMargin flex">
            <div className="card left">
              <div className="profile">
                <img
                  src={
                    preview
                      ? preview
                      : "https://us.123rf.com/450wm/rawpixel/rawpixel1501/rawpixel150103894/35340620-multi-ethnic-group-of-people-and-study-concepts.jpg?ver=6"
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
            <div className="right">
              <TextField
                margin="normal"
                label="스터디 타이틀"
                required
                fullWidth
                name="title"
                autoComplete="title"
                autoFocus
              />
              <TextField
                margin="normal"
                label="스터디 설명"
                required
                fullWidth
                id="desc"
                autoComplete="desc"
              />
              <TextField
                margin="normal"
                label="기간"
                type="date"
                required
                fullWidth
                id="duration"
                autoComplete="duration"
              />
              <TextField
                margin="normal"
                label="정원"
                type="number"
                required
                fullWidth
                id="participant"
                autoComplete="participant"
              />
              <TextField
                margin="normal"
                label="참가 가능 포인트"
                type="number"
                required
                fullWidth
                id="point"
                autoComplete="point"
              />
              <TextField
                margin="normal"
                label="스터디 목표 시간"
                type="time"
                required
                fullWidth
                id="goalhour"
                autoComplete="goalhour"
              />
              <div className="topMargin">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => setCompleteModalOn(true)}
                  color="primary"
                >
                  생성하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateStudy;
