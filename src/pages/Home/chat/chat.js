import React, { useState, useRef, useEffect } from "react";
import "./chatStyles.css";
import GiftRow from "./giftRow";
import EmojiPicker from "./EmojiPicker";
// import AnotherChatter from "./AnotherChatter";

const messages = [
  {
    value: "hello",
  },
  {
    value: "how are you doing",
  },

  {
    value: "whats going on",
  },

  {
    value: "yes yes yes HELLO",
  },
];

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
    img: "emojis/smile.png",
    name: "smile",
    value: " :)",
  },

  {
    img: "emojis/angry.png",
    name: "angry",
    value: " X(",
  },

  {
    img: "emojis/blankface.png",
    name: "blankface",
    value: " :|",
  },

  {
    img: "emojis/cry.png",
    name: "cry",
    value: " :'(",
  },

  {
    img: "emojis/inlove.png",
    name: "inlove",
    value: " *__*",
  },

  {
    img: "emojis/kiss.png",
    name: "kiss",
    value: " :*",
  },

  {
    img: "emojis/sunglasses.png",
    name: "sunglasses",
    value: " 8)",
  },

  {
    img: "emojis/tongueout.png",
    name: "tongueout",
    value: " :P",
  },

  {
    img: "emojis/wink.png",
    name: "wink",
    value: " ;)",
  },

  {
    img: "emojis/woozy.png",
    name: "woozy",
    value: " %(",
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

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  let randomText = Math.floor(Math.random() * messages.length);

  const sendFakeMessage = () => {
    clearInterval(intervalRef.current);
    setTextMessages((prevState) => [
      ...prevState,
      { value: "helloooooooooooo", type: "text" },
    ]);
    setTimeout(() => {
      intervalRef.current = setInterval(sendFakeMessage, 5000);
    }, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(sendFakeMessage, 2000);
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const inputRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    if (textValue !== "") {
      setTextMessages([
        ...textMessages,
        { value: textValue, id: new Date(), type: "text", owner: true },
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
    setTextValue(textValue + emoji.value);
  };

  return (
    <>
      <div className="chat_container">
        <div className="chat_window">
          <div ref={messageRef} className="textContainer">
            {/*<AnotherChatter></AnotherChatter>*/}
            {textMessages.map((text) => {
              if (text.type === "text" && text.owner) {
                return (
                  <div className="textArea">
                    <button
                      className="removeMessage"
                      onClick={() => removeMessage(text.id)}
                    >
                      &times;
                    </button>
                    {text.value}{" "}
                  </div>
                );
              }

              if (text.type === "text" && !text.owner) {
                return <div className="FakeTextArea">{text.value} </div>;
              } else {
                return (
                  <div>
                    {" "}
                    <button
                      className="removeGift"
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

        <form onSubmit={sendMessage} id="chat_form">
          <input
            ref={inputRef}
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
