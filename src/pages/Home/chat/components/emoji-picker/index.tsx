import React, { useState } from 'react';
import styles from './styles.module.css';
import { MessageType } from '../../index';

type EmojiClick = {
  emojis: MessageType[];
  handleClick: (emoji: MessageType) => void;
};

export function EmojiPicker({ handleClick, emojis }: EmojiClick) {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div className={styles.emoji_picker}>
      <div className={styles.emoji__drawer} hidden={hidden}>
        {emojis.map((emoji) => (
          <img
            className={styles.emoji_style}
            onClick={() => {
              handleClick(emoji);
              setHidden(true);
            }}
            key={emoji.name}
            src={emoji.img}
          />
        ))}
      </div>
      <button
        className={styles.emoji_buttonStyle}
        type="button"
        onClick={() => setHidden(!hidden)}
      >
        😃
      </button>
    </div>
  );
}
