import React from 'react';
import { MessageType } from '../../index';
import './styles.css';

type GiftClick = {
  gifts: MessageType[];
  handleClick: (gift: MessageType) => void;
};

export function GiftRow({ handleClick, gifts }: GiftClick) {
  return (
    <div className="chat__giftrow-container">
      {gifts.map((gift) => (
        <img
          className="chat__giftrow_gifts"
          onClick={() => handleClick(gift)}
          key={gift.name}
          src={gift.img}
          alt={gift.name}
        />
      ))}
    </div>
  );
}
