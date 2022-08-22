import React from 'react';
import { MessageType } from '../../index';
import styles from './styles.module.css';

type Props = {
  gifts: MessageType[];
  handleClick: (gift: MessageType) => void;
};

export function GiftRow(props: Props) {
 const { handleClick, gifts } = props
  return (
    <div className={styles.giftContainer}>
      {gifts.map((gift) => (
        <img
          className={styles.giftRow}
          onClick={() => handleClick(gift)}
          key={gift.name}
          src={gift.img}
          alt={gift.name}
        />
      ))}
    </div>
  );
}
