import React from 'react';
import "./card.css"
const Card = (props) => {
  return (
    <div className={`card ${props.color === "yellow" ? "card_gradiant1" : props.color === "blue" ? "card_gradiant2" : "card_gradiant3"}`}>

      <div className="card-content">
      <p className='indicator'>number indicator</p>
      <div className='flex_card'>
        <div className='number'>{props.number}</div>
        <button className="yellow-button">{props.btnName}</button>
      </div></div>
    </div>
  );
};

export default Card;
