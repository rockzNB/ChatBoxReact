import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import GiftRow from "./components/gift-row";
import EmojiPicker from "./components/emoji-picker";
import { MessageRenderer } from "./components/message-renderer";
import { ChatForm } from "./components/chat-form";

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

  const sendFakeMessage = () => {
    clearInterval(intervalRef.current);
    setTextMessages((prevState) => [
      ...prevState,
      {
        value: "hello",
        type: "text",
      },
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
        <MessageRenderer
          textMessages={textMessages}
          removeMessage={removeMessage}
        />
        <ChatForm
          sendMessage={sendMessage}
          textValue={textValue}
          setTextValue={setTextValue}
          inputRef={inputRef}
        />
        <EmojiPicker emojis={emojis} handleClick={sendEmoji} />
        <GiftRow gifts={gifts} handleClick={sendGift} />
      </div>
    </>
  );
}
