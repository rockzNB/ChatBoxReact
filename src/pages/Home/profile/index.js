import React from "react";
import "./styles.css";

export default function Profile() {
  return (
    <div className="profile_container">
      <div className="profile__header">
        <h1>USER PROFILE HEADER</h1>
        <div className="profile__pic">
          <h2>PROFILE PIC BLOCK</h2>
        </div>
      </div>
      <div className="profile__bio">PROFILE INFORMATION BLOCK</div>
      <div className="profile__gallery">
        <div className="profile__photos">MY PHOTOS BLOCK</div>
        <div className="profile__videos">MY VIDEOS BLOCK</div>
      </div>
    </div>
  );
}
