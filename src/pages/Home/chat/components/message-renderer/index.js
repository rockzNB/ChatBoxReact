import React, { useEffect, useRef } from "react";
import "./styles.css";

const giftStyle = {
  height: "3em",
  width: "3em",
  paddingLeft: "8px",
  padding: "10px",
};

export function MessageRenderer({ textMessages = [], removeMessage }) {
  const messageRef = useRef(null);
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [textMessages]);
  return (
    <div className="chat_window">
      <div ref={messageRef} className="chat_text_container">
        {textMessages.map((text) => {
          if (text.type === "text" && text.owner) {
            return (
              <div className="chat_chatter">
                <button
                  className="chat_remove_message"
                  onClick={() => removeMessage(text.id)}
                >
                  &times;
                </button>
                <div className="chat_chatter_text">{text.value}</div>
              </div>
            );
          }
          if (text.type === "text" && !text.owner) {
            return (
              <div className="chat_fake_chatter">
                <div className="chat_fake_chatter_text">{text.value}</div>
              </div>
            );
          } else {
            return (
              <div>
                {" "}
                <button
                  className="chat_remove_gift"
                  onClick={() => removeMessage(text.id)}
                >
                  &times;
                </button>
                <img style={giftStyle} src={text.img} />{" "}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
