import React from 'react'




export default function GiftRow () {
    const giftStyle = {
        height: '3em',
        width: '3em',
        paddingLeft: '8px'
    }

    const giftContainerStyle = {
        position: "fixed",
        marginTop: '-100px',
        marginLeft: '10px',

    }

    return (
        <div style={giftContainerStyle}  className='giftRow_container'>

            <img style={giftStyle} src={require("./gifts/crownQeen.png")} alt="crown"/>
            <img style={giftStyle} src={require("./gifts/heart_simple.png")} alt="heart"/>
            <img style={giftStyle} src={require("./gifts/plane.png")} alt="plane"/>
            <img style={giftStyle} src={require("./gifts/roseBasket.png")} alt="basket"/>
            <img style={giftStyle} src={require("./gifts/diamond.png")} alt="diamond"/>
            <img style={giftStyle} src={require("./gifts/chocolate.png")} alt="chocolate"/>
            <img style={giftStyle} src={require("./gifts/car.png")} alt="car"/>
        </div>

    )
}

