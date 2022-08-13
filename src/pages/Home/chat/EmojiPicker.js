import React, { useState } from "react";
import "./emojiStyles.css";

const emojiStyle = {
  height: "1rem",
  width: "1rem",
};

export default function EmojiPicker({ handleClick, emojis }) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="emoji_picker">
      <div className="drawer" hidden={hidden}>
        {emojis.map((emoji) => (
          <img
            style={emojiStyle}
            onClick={() => handleClick(emoji)}
            key={emoji.name}
            src={emoji.img}
            alt={emoji.name}
          />
        ))}
      </div>
      <button onClick={() => setHidden(!hidden)}>😃</button>
    </div>
  );
}
