import React, { useState } from "react";
import "./styles.css";

const emojiStyle = {
  height: "1rem",
  width: "1rem",
  cursor: "pointer",
};

const emojiButtonStyle = {
  cursor: "pointer",
};

export default function EmojiPicker({ handleClick, emojis }) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="emoji_picker">
      <div className="emoji__drawer" hidden={hidden}>
        {emojis.map((emoji) => (
          <img
            style={emojiStyle}
            onClick={() => {
              handleClick(emoji);
              setHidden(emoji);
            }}
            key={emoji.name}
            src={emoji.img}
            alt={emoji.value}
          />
        ))}
      </div>
      <button
        style={emojiButtonStyle}
        type="button"
        onClick={() => setHidden(!hidden)}
      >
        😃
      </button>
    </div>
  );
}
