import React from 'react';
import { MessageType } from '../../index';
import styles from './styles.module.css';

type GiftClick = {
  gifts: MessageType[];
  handleClick: (gift: MessageType) => void;
};

export function GiftRow({ handleClick, gifts }: GiftClick) {
  return (
    <div className={styles.chat__giftContainer}>
      {gifts.map((gift) => (
        <img
          className={styles.chat__giftRow}
          onClick={() => handleClick(gift)}
          key={gift.name}
          src={gift.img}
          alt={gift.name}
        />
      ))}
    </div>
  );
}
