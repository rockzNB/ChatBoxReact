import React, { useState, useCallback } from 'react';
import styles from './styles.module.css';
import { MessageType } from '../../index';

type Props = {
  emojis: MessageType[];
  handleClick: (emoji: MessageType) => void;
};

export function EmojiPicker(props: Props) {
    const {handleClick, emojis} = props
  const [hidden, setHidden] = useState<boolean>(true);
  const onEmojiClick = useCallback(
    (emoji: MessageType) => {
      handleClick(emoji);
      setHidden(true);
    },
    [handleClick]
  );
  return (
    <div className={styles.emojiPicker}>
      <div className={styles.emojiDrawer} hidden={hidden}>
        {emojis.map((emoji) => (
          <img
            className={styles.emojiStyle}
            onClick={() => onEmojiClick(emoji)}
            key={emoji.name}
            src={emoji.img}
          />
        ))}
      </div>
      <button
        className={styles.emojiButtonStyle}
        type="button"
        onClick={() => setHidden(!hidden)}
      >
        😃
      </button>
    </div>
  );
}
