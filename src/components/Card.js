import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { card, onCardClick, onCardLike, onCardDelete } = props;
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `elements__button ${
    isOwn && "elements__button_visible"}`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `elements__like-button ${
    isLiked && "elements__like-button_active"}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
     onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="elements-template">
      <li className="elements__item">
        <img
          onClick={handleClick}
          src={card.link}
          alt={card.name}
          className="elements__image"
        />
        <button
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
          type="button"
        />
        <div className="elements__description">
          <p className="elements__title">{card.name}</p>
          <div className="elements__like">
            <button
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
              type="button"
            />
            <p className="elements__like-count">{card.likes.length}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;