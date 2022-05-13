import { Input } from "@material-ui/core";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { blue, pink } from "@mui/material/colors";
import Messages from "../../chat/Messages/Messages";

const Studyroom = () => {
  return (
    <>
      <section className="studyroom">
        <div className="container">
          <div className="heading">
            <h1>CS 모여라 Study Room</h1>
          </div>
          <div className="content">
            <div className="left">
              <div className="screen">
                <img src="./assets/profile/default.png" />
              </div>
              <div className="exitBtn">
                <Link to="/study/detail">
                  <Button variant="contained" color="error" size="large">
                    나가기
                  </Button>
                </Link>
              </div>
            </div>
            <div className="right">
              <div className="studymember">
                <div className="heading">참여중인 스터디원</div>
                <div className="memberon">
                  <Avatar sx={{ width: 50, height: 50, bgcolor: blue[500] }}>
                    ON
                  </Avatar>
                  <span>김창환</span>
                  <h4>1시간째</h4>
                </div>
                <div className="memberon">
                  <Avatar sx={{ width: 50, height: 50, bgcolor: pink[500] }}>
                    OFF
                  </Avatar>
                  <span>황혜련</span>
                  <h4>2시간째</h4>
                </div>
              </div>
              <div className="studyroomchat">
                <div className="chatheading">Chat</div>
                <div className="chatMessages">
                  <Messages />
                </div>
                <div className="chatinputform">
                  <div className="chatinput">
                    <Input fullWidth placeholder="채팅을 입력하세요" />
                  </div>
                  <div className="chatsendbtn">
                    <Button>전송</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studyroom;
