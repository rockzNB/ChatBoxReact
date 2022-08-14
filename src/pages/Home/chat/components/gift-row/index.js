import React from "react";

export default function GiftRow({ handleClick, gifts }) {
  const giftStyle = {
    height: "3em",
    width: "3em",
    paddingLeft: "8px",
    cursor: "pointer",
  };

  const giftContainerStyle = {
    position: "fixed",
    marginTop: "-100px",
    marginLeft: "10px",
  };

  return (
    <div style={giftContainerStyle} className="giftRow_container">
      {gifts.map((gift) => (
        <img
          onClick={() => handleClick(gift)}
          key={gift.name}
          src={gift.img}
          alt={gift.name}
          style={giftStyle}
        />
      ))}
    </div>
  );
}
