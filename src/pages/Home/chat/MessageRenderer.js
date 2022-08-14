import React from "react";

const giftStyle = {
  height: "3em",
  width: "3em",
  paddingLeft: "8px",
  padding: "10px",
};

export function MessageRenderer({ textMessages = [], removeMessage }) {
  return textMessages.map((text) => {
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
          <button className="removeGift" onClick={() => removeMessage(text.id)}>
            &times;
          </button>
          <img style={giftStyle} src={text.img} />{" "}
        </div>
      );
    }
  });
}
