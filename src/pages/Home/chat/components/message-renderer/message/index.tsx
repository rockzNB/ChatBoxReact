import React from 'react';
import styles from './styles.module.css';
import { MessageType } from '../../../index';

type MessageProps = {
  message: MessageType;
  removeMessage: (id?: Date) => void;
};

export function Message({ message, removeMessage }: MessageProps) {
  const ChatOrFake = message.owner
    ? styles.chat_chatter
    : styles.chat_fakeChatter;

  if (message.type === 'text') {
    return (
      <div className={ChatOrFake}>
        {message.owner && (
          <button
            className={styles.chat__removeButton}
            onClick={() => removeMessage(message.id)}
          >
            &times;
          </button>
        )}
        <div className={styles.chat__chatterText}>{message.value}</div>
      </div>
    );
  }
  if (message.type === 'gift') {
    return (
      <div>
        {' '}
        <button
          className={styles.chat__removeGift}
          onClick={() => removeMessage(message.id)}
        >
          &times;
        </button>
        <img className={styles.chat__giftStyle} src={message.img} />{' '}
      </div>
    );
  }
  return null;
}
