import React, { useState, useRef, useEffect } from "react";
import "./chatStyles.css";
import GiftRow from "./giftRow";
import EmojiPicker from "./EmojiPicker";

const giftStyle = {
  height: "3em",
  width: "3em",
  paddingLeft: "8px",
  padding: "10px",
};

const gifts = [
  {
    img: "gifts/crownQeen.png",
    name: "crown",
  },
  {
    img: "gifts/heart_simple.png",
    name: "heart",
  },
  {
    img: "gifts/roseBasket.png",
    name: "basket",
  },

  {
    img: "gifts/plane.png",
    name: "plane",
  },

  {
    img: "gifts/diamond.png",
    name: "diamond",
  },

  {
    img: "gifts/chocolate.png",
    name: "chocolate",
  },

  {
    img: "gifts/car.png",
    name: "car",
  },
];

const emojis = [
  {
    img: "emojis/hearteyes.png",
    name: "hearteyes",
  },

  {
    img: "emojis/cool.png",
    name: "cool",
  },
];

export default function ChatBox() {
  const [textValue, setTextValue] = useState("");
  const [textMessages, setTextMessages] = useState([]);
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

  const sendMessage = (e) => {
    e.preventDefault();
    if (textValue !== "") {
      setTextMessages([
        ...textMessages,
        { value: textValue, id: new Date(), type: "text" },
      ]);
      setTextValue("");
    }
  };

  function removeMessage(messageId) {
    setTextMessages((prevState) =>
      prevState.filter(({ id }) => id !== messageId)
    );
  }
  const sendGift = (gift) => {
    setTextMessages([...textMessages, { ...gift, id: new Date() }]);
  };

  const sendEmoji = (emoji) => {
    setTextMessages([...textMessages, { ...emoji, id: new Date() }]);
  };

  return (
    <>
      <div className="chat_container">
        <div className="chat_window">
          <div ref={messageRef} className="textContainer">
            {textMessages.map((text) => {
              if (text.type === "text") {
                return (
                  <div className="textArea">
                    {text.value}{" "}
                    <button onClick={() => removeMessage(text.id)}>
                      Delete Text
                    </button>
                  </div>
                );
              } else {
                return (
                  <div>
                    {" "}
                    <button onClick={() => removeMessage(text.id)}>
                      Delete Image
                    </button>
                    <img style={giftStyle} src={text.img} />{" "}
                  </div>
                );
              }
            })}
          </div>
        </div>

        <form onSubmit={sendMessage} id="chat_form">
          <input
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            name="enterMsg"
            placeholder="Type your message..."
            className="chat_input"
          />

          <button type="submit" className="chat_sendBtn">
            <text>
              <b>SEND</b>
            </text>
            <i></i>
          </button>
          <EmojiPicker emojis={emojis} handleClick={sendEmoji}></EmojiPicker>
          <GiftRow gifts={gifts} handleClick={sendGift}></GiftRow>
        </form>
      </div>
    </>
  );
}
