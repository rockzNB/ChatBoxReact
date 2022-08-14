import React from "react";
import "./styles.css";

export default function Profile() {
  return (
    <div className="profile_container">
      <div className="profile_header">
        <h1>USER PROFILE HEADER</h1>
        <div className="profile_pic">
          <h2>PROFILE PIC BLOCK</h2>
        </div>
      </div>
      <div className="profile_bio">PROFILE INFORMATION BLOCK</div>
      <div className="profile_gallery">
        <span className="profile_columns">GALLERY BLOCK</span>
        <div className="profile_photos">MY PHOTOS BLOCK</div>
        <div className="profile_videos">MY VIDEOS BLOCK</div>
      </div>
    </div>
  );
}
