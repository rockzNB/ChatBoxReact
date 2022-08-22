import React from 'react';
import styles from './styles.module.css';

type Props = {
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  textValue: string;
  setTextValue: (value: string) => void;
  inputRef: React.LegacyRef<HTMLInputElement>;
};

export function ChatForm(props: Props) {
  const {sendMessage, inputRef, textValue, setTextValue} = props
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  return (
    <form onSubmit={sendMessage}>
      <input
        ref={inputRef}
        type="text"
        value={textValue}
        onChange={handleInputChange}
        name="enterMsg"
        placeholder="Type your message..."
        className={styles.input}
      />

      <button type="submit" className={styles.sendBtn}>
        <text>
          <b>SEND</b>
        </text>
        <i></i>
      </button>
    </form>
  );
}
