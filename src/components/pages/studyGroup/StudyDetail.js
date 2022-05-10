import React, { useState } from "react";
import { Button } from "@material-ui/core";

const StudyDetail = () => {
  const [preview, setPreview] = useState();

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
      <section className="myinfo studydetail">
        <div className="container">
          <div className="heading topMargin">
            <h3>You are the BEST 🙌</h3>
            <h1>스터디 타이틀</h1>
          </div>
          <div className="contain topMargin flex">
            <div className="left">
              <div className="profile">
                <img src="https://us.123rf.com/450wm/rawpixel/rawpixel1501/rawpixel150103894/35340620-multi-ethnic-group-of-people-and-study-concepts.jpg?ver=6" />
              </div>
            </div>
            <div className="right">
              <table className="table table-borderless h5">
                <tr>
                  <td>스터디 설명</td>
                  <td className="value">CS 스터디입니다.</td>
                </tr>
                <tr>
                  <td>기간</td>
                  <td className="value">2022.05.06 - 2022.05.31 (총 3주)</td>
                </tr>
                <tr>
                  <td>정원</td>
                  <td className="value">6명</td>
                </tr>
                <tr>
                  <td>참가 가능 포인트</td>
                  <td className="value">500 포인트</td>
                </tr>
                <tr>
                  <td>스터디 목표 시간</td>
                  <td className="value">하루 3시간</td>
                </tr>
              </table>
              <div className="topMargin">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={() => setCompleteModalOn(true)}
                  color="primary"
                >
                  참여하기
                </Button>
                <div className="alert">
                  <span className="alert">
                    🚨 참여하기 클릭 시 포인트 차감 후 화상스터디룸 입장합니다.
                    🚨
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyDetail;
