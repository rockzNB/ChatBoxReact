import React from 'react';
import styles from './styles.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <h1>USER PROFILE HEADER</h1>
        <div className={styles.profilePic}>
          <h2>PROFILE PIC BLOCK</h2>
        </div>
      </div>
      <div className={styles.profileBio}>PROFILE INFORMATION BLOCK</div>
      <div className={styles.profileGallery}>
        <div className={styles.profilePhotos}>MY PHOTOS BLOCK</div>
        <div className={styles.profileVideos}>MY VIDEOS BLOCK</div>
      </div>
    </div>
  );
}
