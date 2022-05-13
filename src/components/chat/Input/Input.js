import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="메세지를 입력해주세요"
      // value={message}
      // onChange={({ target: { value } }) => setMessage(value)}
      // onKeyPress={(event) =>
      //   event.key === "Enter" ? sendMessage(event) : null
      // }
    />
    <button className="sendButton">전송</button>
  </form>
);

export default Input;
