import React, { useState } from "react";
import "./emojiStyles.css";

export default function EmojiPicker(handleClick, emojis) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="emoji_picker">
      <div className="drawer" hidden={hidden}>
        {/*{emojis.map((emoji) => (*/}
        {/*  <img*/}
        {/*    onClick={() => handleClick(emoji)}*/}
        {/*    key={emoji.name}*/}
        {/*    src={emoji.img}*/}
        {/*    alt={emoji.name}*/}
        {/*  />*/}
        {/*))}*/}
      </div>
      <button onClick={() => setHidden(!hidden)}>😃</button>
    </div>
  );
}
