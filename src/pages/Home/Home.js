import React from "react";
import "./homeStyles.css";
import Header from "./header";
import Profile from "./profile/profile";
import ChatBox from "./chat/chat";

export default function Home() {
  return (
    <>
      <div className="home_container">
        <h1 className="header">
          <Header />
        </h1>
        <div className="profile">
          <Profile></Profile>
        </div>
        <div className="chat">
          <ChatBox></ChatBox>
        </div>
      </div>
    </>
  );
}
