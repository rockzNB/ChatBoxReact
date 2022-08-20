import React from 'react';
import { StringObj } from '../../index';
import './styles.css';

type GiftClick = {
  gifts: StringObj[];
  handleClick: (e: React.MouseEvent) => void;
};

export function GiftRow({ handleClick, gifts }: GiftClick) {
  return (
    <div className="chat_container">
      {gifts.map((gift: any) => (
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
