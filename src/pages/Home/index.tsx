import React from 'react';
import styles from './styles.module.css';
import Header from './components/header';
import Profile from './profile';
import ChatBox from './chat';

export default function Home() {
  return (
    <>
      <div className={styles.home_container}>
        <h1 className={styles.header}>
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
