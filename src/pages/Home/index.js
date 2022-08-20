import React from 'react';
import './styles.css';
import Header from './components/header';
import Profile from './profile';
import ChatBox from './chat';

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
