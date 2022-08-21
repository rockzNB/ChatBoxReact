import React, { useEffect, useRef } from 'react';
import './styles.css';
import { MessageType } from '../../index';

type Props = {
  removeMessage: (id: Date) => void;
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
    <div className="chat__window">
      <div ref={messageRef} className="chat__text-container">
        {textMessages.map((text) => {
          const className = text.owner ? 'chat_chatter' : 'chat_fake_chatter';
          if (text.type === 'text') {
            return (
              <div className={className}>
                {text.owner && (
                  <button
                    className="chat__remove-button"
                    onClick={() => removeMessage(text.id)}
                  >
                    &times;
                  </button>
                )}
                <div className="chat__chatter-text">{text.value}</div>
              </div>
            );
          }
          if (text.type === 'gift') {
            return (
              <div>
                {' '}
                <button
                  className="chat__remove-gift"
                  onClick={() => removeMessage(text.id)}
                >
                  &times;
                </button>
                <img className="chat__gift-style" src={text.img} />{' '}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
