import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { GiftRow } from './components/gift-row';
import { EmojiPicker } from './components/emoji-picker';
import { MessageRenderer } from './components/message-renderer';
import { ChatForm } from './components/chat-form';
import { startWith, interval, from, zipWith, take } from 'rxjs';

const gifts = [
  {
    img: 'gifts/crownQeen.png',
    name: 'crown',
  },
  {
    img: 'gifts/heart_simple.png',
    name: 'heart',
  },
  {
    img: 'gifts/roseBasket.png',
    name: 'basket',
  },

  {
    img: 'gifts/plane.png',
    name: 'plane',
  },

  {
    img: 'gifts/diamond.png',
    name: 'diamond',
  },

  {
    img: 'gifts/chocolate.png',
    name: 'chocolate',
  },

  {
    img: 'gifts/car.png',
    name: 'car',
  },
];

const emojis = [
  {
    img: 'emojis/smile.png',
    name: 'smile',
    value: ' :)',
  },

  {
    img: 'emojis/angry.png',
    name: 'angry',
    value: ' X(',
  },

  {
    img: 'emojis/blankface.png',
    name: 'blankface',
    value: ' :|',
  },

  {
    img: 'emojis/cry.png',
    name: 'cry',
    value: " :'(",
  },

  {
    img: 'emojis/inlove.png',
    name: 'inlove',
    value: ' *__*',
  },

  {
    img: 'emojis/kiss.png',
    name: 'kiss',
    value: ' :*',
  },

  {
    img: 'emojis/sunglasses.png',
    name: 'sunglasses',
    value: ' 8)',
  },

  {
    img: 'emojis/tongueout.png',
    name: 'tongueout',
    value: ' :P',
  },

  {
    img: 'emojis/wink.png',
    name: 'wink',
    value: ' ;)',
  },

  {
    img: 'emojis/woozy.png',
    name: 'woozy',
    value: ' %(',
  },

  {
    img: 'emojis/sad.png',
    name: 'sad',
    value: ' :(',
  },

  {
    img: 'emojis/grin.png',
    name: 'grin',
    value: ' :D',
  },
];

const messages = [
  {
    value: 'Привет, Давай пообщаемся?',
  },

  {
    value: 'Привет, Давай пообщаемся?',
  },

  {
    value: 'Привет, Давай пообщаемся?',
  },

  {
    value: 'Привет, Давай пообщаемся?',
  },
  {
    value: 'Привет, Давай пообщаемся?',
  },
  {
    value: 'Привет, Давай пообщаемся?',
  },
  {
    value: 'Привет, Давай пообщаемся?',
  },
];

export type MessageType = {
  id?: Date;
  value?: string | boolean;
  owner?: boolean;
  type?: string;
  img?: string;
  name?: string;
};

export default function ChatBox() {
  const [textValue, setTextValue] = useState<string>('');
  const [textMessages, setTextMessages] = useState<MessageType[]>([]);
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

  const botMessage = { value: 'Привет! Я бот Алиса. Давай знакомиться!' };

  const getMessage = from(messages);

  const sendFakeMessage = getMessage.pipe(
    startWith(botMessage),
    take(5),
    // @ts-ignore
    zipWith(interval(5000), (message, index) => {
      if (index === 0) {
        return message;
      } else {
        return index % 2 === 0
          ? { value: `${message.value} Напиши мне! ` }
          : message;
      }
    })
  );

  useEffect(() => {
    const subscribeFakeMsg = sendFakeMessage.subscribe((message) => {
      setTextMessages((prevState) => [
        ...prevState,
        {
          // @ts-ignore
          value: message.value,
          type: 'text',
        },
      ]);
    });
    function unsubscribeFakeMsg() {
      subscribeFakeMsg.unsubscribe();
    }
    return unsubscribeFakeMsg;
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (textValue !== '') {
        setTextMessages([
          ...textMessages,
          { value: textValue, id: new Date(), type: 'text', owner: true },
        ]);
        setTextValue('');
      }
    },
    [textValue]
  );

  function removeMessage(messageId?: Date) {
    setTextMessages((prevState) =>
      prevState.filter(({ id }) => id !== messageId)
    );
  }
  const sendGift = useCallback((gift: MessageType) => {
    setTextMessages((prevState) => [
      ...prevState,
      { ...gift, id: new Date(), type: 'gift' },
    ]);
  }, []);

  const sendEmoji = useCallback(
    (emoji: MessageType) => {
      setTextValue(textValue + emoji.value);
    },
    [textValue]
  );

  return (
    <>
      <div className={styles.chatContainer}>
        <MessageRenderer
          textMessages={textMessages}
          removeMessage={removeMessage}
        />
        <ChatForm
          sendMessage={sendMessage}
          textValue={textValue}
          setTextValue={setTextValue}
          inputRef={inputRef}
        />
        <EmojiPicker emojis={emojis} handleClick={sendEmoji} />
        <GiftRow gifts={gifts} handleClick={sendGift} />
      </div>
    </>
  );
}
