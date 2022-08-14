import React from "react";
import EmojiPicker from "./EmojiPicker";
import GiftRow from "./giftRow";

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

export function ChatForm({
  sendMessage,
  inputRef,
  textValue,
  setTextValue,
  sendEmoji,
  sendGift,
}) {
  return (
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
  );
}
