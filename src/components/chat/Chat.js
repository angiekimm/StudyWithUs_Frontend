import React from "react";
import Chat from "./Chat/Chat";

const chat = () => {
  return (
    <>
      <section className="mychat">
        <div className="container">
          <div className="heading topMargin">
            <h3>My Chat</h3>
            <h1>My Chat</h1>
          </div>
          <Chat />
        </div>
      </section>
    </>
  );
};

export default chat;
