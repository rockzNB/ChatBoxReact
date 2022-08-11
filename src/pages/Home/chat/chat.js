import React, { useState, useRef, useEffect } from "react";
import "./chatStyles.css";
import GiftRow from "./giftRow";

const giftStyle = {
  height: "3em",
  width: "3em",
  paddingLeft: "8px",
};

const gifts = [
  {
    img: "gifts/crownQeen.png",
    name: "crown",
    type: "gift",
  },
  {
    img: "gifts/heart_simple.png",
    name: "heart",
    type: "gift",
  },
  {
    img: "gifts/roseBasket.png",
    name: "basket",
    type: "gift",
  },

  {
    img: "gifts/plane.png",
    name: "plane",
    type: "gift",
  },

  {
    img: "gifts/diamond.png",
    name: "diamond",
    type: "gift",
  },

  {
    img: "gifts/chocolate.png",
    name: "chocolate",
    type: "gift",
  },

  {
    img: "gifts/car.png",
    name: "car",
    type: "gift",
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
      setTextMessages([...textMessages, textValue]);
      setTextValue("");
    }
  };

  const sendGift = (gift) => {
    setTextMessages([...textMessages, gift]);
  };

  return (
    <>
      <div className="chat_container">
        <div className="chat_window">
          <div ref={messageRef} className="textContainer">
            {textMessages.map((text) => {
              if (typeof text === "string") {
                return <div className="textArea">{text}</div>;
              }
              return (
                <div>
                  {" "}
                  <img style={giftStyle} src={text.img} />{" "}
                </div>
              );
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
          <GiftRow gifts={gifts} handleClick={sendGift}></GiftRow>
        </form>
      </div>
    </>
  );
}
