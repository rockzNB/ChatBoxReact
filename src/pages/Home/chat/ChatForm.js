import React from "react";

export function ChatForm({ sendMessage, inputRef, textValue, setTextValue }) {
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
    </form>
  );
}