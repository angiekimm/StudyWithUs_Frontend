import React, { useState, useEffect } from "react";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./Chat.css";
import { useLocation } from "react-router-dom";

const Chat = () => {
  const [name, setName] = useState("");
  // 제일 처음 있는 tid로 초기화 시키기
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // 내가 속한 팀 리스트 저장 변수
  const [teamlist, setTeamlist] = useState([]);

  // 채팅을 누른 tid 받아오기!
  const location = useLocation();

  useEffect(() => {
    if (location) {
      // 넘겨받은 tid를 받아서 room에 저장
      setRoom(location.state.tid);
      // 내가 속한 팀 목록을 teamlist에 저장
      setTeamlist(location.state.teamlist);
    }
  }, []);

  // 내가 속한 팀 중에서 room(tid)에 해당되는 team 정보를 저장한다.
  const currentteam = teamlist.filter((team) => team.tid == room);

  return (
    <div className="chatContainer topMargin">
      <div className="leftContainer">
        <div className="studygroup">
          <div>
            <h3>나의 스터디 목록</h3>
          </div>
        </div>
        <TextContainer room={room} teamlist={teamlist} />
      </div>
      <div className="rightcontainer">
        {/* <InfoBar /> */}
        <InfoBar teamname={currentteam.team_name} />
        <Messages />
        <Input />
      </div>
    </div>
  );
};

export default Chat;
