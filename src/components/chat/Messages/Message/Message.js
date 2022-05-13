import React from "react";

import "./Message.css";

const Message = () => {
  let isSentByCurrentUser = false;

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">김은지</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">안녕하세요</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">안녕하세요</p>
      </div>
      <p className="sentText pl-10 ">김은지</p>
    </div>
  );
};

export default Message;
