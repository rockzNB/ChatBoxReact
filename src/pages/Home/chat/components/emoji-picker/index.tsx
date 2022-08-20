import React, { useState } from 'react';
import styles from './styles.module.css';
import { StringObj } from '../../index';

const emojiStyle = {
  height: '1rem',
  width: '1rem',
  cursor: 'pointer',
  margin: '2px',
};

const emojiButtonStyle = {
  cursor: 'pointer',
};

type EmojiClick = {
  emojis: StringObj[];
  handleClick: (e: React.MouseEvent) => void;
};

export function EmojiPicker({ handleClick, emojis }: EmojiClick) {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div className={styles.emoji_picker}>
      <div className={styles.emoji__drawer} hidden={hidden}>
        {emojis.map((emoji: any) => (
          <img
            style={emojiStyle}
            onClick={() => {
              handleClick(emoji);
              setHidden(emoji);
            }}
            key={emoji.name}
            src={emoji.img}
            alt={emoji.value}
          />
        ))}
      </div>
      <button
        style={emojiButtonStyle}
        type="button"
        onClick={() => setHidden(!hidden)}
      >
        😃
      </button>
    </div>
  );
}
