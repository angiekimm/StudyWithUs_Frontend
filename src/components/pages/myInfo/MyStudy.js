import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

const MyStudy = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{ opacity: 1, width: `${done}%` }}
        >
          <h4>{title}</h4>
          <h4>{done} %</h4>
        </div>
      </div>
    );
  };
  return (
    <>
      <section className="mystudy">
        <div className="container">
          <div className="heading">
            <h3>My Study</h3>
            <h1>내 스터디 공부량</h1>
          </div>
          <div className="goal flex topMargin">
            <div className="left">
              <h1 className="h3">스터디별 오늘 목표 달성</h1>
              <div className="group">
                <h3>CS 스터디</h3>
                <AvatarGroup>
                  <Avatar>AB</Avatar>
                  <Avatar>CD</Avatar>
                  <Avatar>EF</Avatar>
                  <Avatar>GH</Avatar>
                </AvatarGroup>
              </div>
            </div>
            <div className="right">
              <div className="content h3">
                <h4>내 목표 달성률</h4>
                <Progress done="80" title="오늘" />
                <Progress done="70" title="일주일" />
                <Progress done="60" title="한달" />
              </div>
              <div className="content topMargin h3">
                <h4>스터디별 누적시간</h4>
                <Progress done="70" title="공무원" />
                <Progress done="90" title="알고리즘" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyStudy;
