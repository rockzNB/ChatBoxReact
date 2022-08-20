import React from 'react';
import styles from './styles.module.css';

export default function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile__header}>
        <h1>USER PROFILE HEADER</h1>
        <div className={styles.profile__pic}>
          <h2>PROFILE PIC BLOCK</h2>
        </div>
      </div>
      <div className={styles.profile__bio}>PROFILE INFORMATION BLOCK</div>
      <div className={styles.profile__gallery}>
        <div className={styles.profile__photos}>MY PHOTOS BLOCK</div>
        <div className={styles.profile__videos}>MY VIDEOS BLOCK</div>
      </div>
    </div>
  );
}
