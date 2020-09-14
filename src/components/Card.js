import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements-template">
      <li className="elements__item">
        <img
          onClick={handleClick}
          src={props.card.link}
          alt={props.card.name}
          className="elements__image"
        />
        <button className="elements__button" type="button" />
        <div className="elements__description">
          <p className="elements__title">{props.card.name}</p>
          <div className="elements__like">
            <button className="elements__like-button" type="button" />
            <p className="elements__like-count">{props.card.likes.length}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;
