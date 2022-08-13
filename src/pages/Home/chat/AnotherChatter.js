import React, { useEffect, useRef, useState } from "react";

const messages = [
  "hello",
  "how are you",
  "nice to meet you",
  "hi lets chat",
  "long time no see",
];

export default function AnotherChatter() {
  const [fakeMessage, setFakeMessage] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  let intervalMessage = setInterval(sendFakeMessage, 2000);
  let randomText = Math.floor(Math.random() * messages.length);
  function sendFakeMessage() {
    clearInterval(intervalMessage);
    timeoutRef.current = setTimeout(() => {
      setFakeMessage(false);
    });

    return timeoutRef.current(
      setTimeout(() => {
        setFakeMessage(false);
        intervalMessage = setInterval(sendFakeMessage, 5000);
      }, 5000)
    );
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFakeMessage(true);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  if (fakeMessage) {
    return <div>{messages[randomText]}</div>;
  }
}
