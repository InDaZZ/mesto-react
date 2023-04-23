import React from "react";
function Card({ card, onCardClick }) {


  function handleClick() {
    console.log(onCardClick(card))
  }

  return (
    <div className="element">
      <img src={`${card.link}`} alt={card.name} className="element__image" style={{ color: "FFFFFF" }} onClick={handleClick} />
      <div className="element__content">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like"></button>
          <div className="element__like-counter"></div>
        </div>
        <button type="button" className="element__delete"></button>
      </div>
    </div>
  )
}
export default Card
