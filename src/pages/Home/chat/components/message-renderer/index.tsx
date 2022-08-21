import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { MessageType } from '../../index';

type Props = {
  removeMessage: (id?: Date) => void;
  textMessages: MessageType[];
};

export function MessageRenderer({ textMessages = [], removeMessage }: Props) {
  const messageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, [textMessages]);
  return (
    <div className={styles.chat__window}>
      <div ref={messageRef} className={styles.chat__textContainer}>
        {textMessages.map((text) => {
          const ChatOrFake = text.owner
            ? styles.chat_chatter
            : styles.chat_fakeChatter;
          if (text.type === 'text') {
            return (
              <div className={ChatOrFake}>
                {text.owner && (
                  <button
                    className={styles.chat__removeButton}
                    onClick={() => removeMessage(text.id)}
                  >
                    &times;
                  </button>
                )}
                <div className={styles.chat__chatterText}>{text.value}</div>
              </div>
            );
          }
          if (text.type === 'gift') {
            return (
              <div>
                {' '}
                <button
                  className={styles.chat__removeGift}
                  onClick={() => removeMessage(text.id)}
                >
                  &times;
                </button>
                <img className={styles.chat__giftStyle} src={text.img} />{' '}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
