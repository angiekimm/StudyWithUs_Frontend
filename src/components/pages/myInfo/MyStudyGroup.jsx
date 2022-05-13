import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MyStudyGroup = () => {
  return (
    <>
      <section className="mystudygroup topMargin">
        <div className="container">
          <div className="heading">
            <h3>My Study Group</h3>
            <h1>내 스터디 그룹</h1>
          </div>
          <div className="content flex topMargin">
            <div className="left">
              <img
                src="https://us.123rf.com/450wm/rawpixel/rawpixel1501/rawpixel150103894/35340620-multi-ethnic-group-of-people-and-study-concepts.jpg?ver=6"
                alt="study image"
              />
            </div>
            <div className="right">
              <div className="groupinfo">
                <div className="groupdesc">
                  <h2>스터디타이틀</h2>
                  <p>스터디 설명</p>
                  <h4>기간: 2022.05.06 ~ 2022.05.31 (총 3주)</h4>
                  <h4>정원: 6명</h4>
                  <h4>참가 가능 포인트: 500포인트</h4>
                </div>
                <div className="groupjoin">
                  <Link to="/chat">
                    <Button size="large">💬 채팅</Button>
                  </Link>
                  <Link to="/studyroom">
                    <Button size="large">📚 스터디룸 입장하기</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyStudyGroup;
