import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { GiftRow } from './components/gift-row';
import { EmojiPicker } from './components/emoji-picker';
import { MessageRenderer } from './components/message-renderer';
import { ChatForm } from './components/chat-form';

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
    value:
      "hello how are you doing? I'm a chinese billionaire, I own a company, where are you from? I wanna send you $50000000",
  },
  {
    value: 'please send me those virtual gifts I need them to escape prison',
  },

  {
    value: 'if you REALLY love me, SEND ME THE VIRTUAL GIFTS!!!',
  },

  {
    value: "I'm waiting for you at the airport, where are you??? ",
  },

  {
    value: 'MORE MORE VIRTUAL GIFTS PLEASE ',
  },

  {
    value: 'SEND ME YOUR WESTERN UNION ',
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

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function randomText() {
    const random: number = Math.floor(Math.random() * messages.length);
    const randomMessages = messages[random];
    return randomMessages.value;
  }

  const sendFakeMessage = useCallback(() => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setTextMessages((prevState) => [
      ...prevState,
      {
        value: randomText(),
        type: 'text',
      },
    ]);
    setTimeout(() => {
      timeoutRef.current = setTimeout(sendFakeMessage, 5000);
      intervalRef.current = setInterval(sendFakeMessage, 5000);
    }, 5000);
  }, [textMessages]);

  useEffect(() => {
    intervalRef.current = setInterval(sendFakeMessage, 2000);
    return () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      clearTimeout(timeoutRef.current as NodeJS.Timeout);
    };
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
  const sendGift = useCallback(
    (gift: MessageType) => {
      setTextMessages([
        ...textMessages,
        { ...gift, id: new Date(), type: 'gift' },
      ]);
    },
    [textMessages]
  );

  const sendEmoji = useCallback(
    (emoji: MessageType) => {
      setTextValue(textValue + emoji.value);
    },
    [textMessages]
  );

  return (
    <>
      <div className={styles.chat_container}>
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
