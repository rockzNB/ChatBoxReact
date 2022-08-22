import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { MessageType } from '../../index';
import { Message } from './message';

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
        {textMessages.map((message, index) => (
          <Message
            key={index}
            message={message}
            removeMessage={removeMessage}
          />
        ))}
      </div>
    </div>
  );
}
