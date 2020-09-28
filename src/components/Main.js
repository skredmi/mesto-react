import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const {
    cards,
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
    onCardLike,
    onCardDelete,
  } = props;

  return (
    <main className="content">
      <section className="profile">
        <div onClick={onEditAvatar} className="profile__avatar">
          <img
            src={currentUser.avatar}
            alt="Аватар профиля"
            className="profile__avatar-img"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            onClick={onEditProfile}
            className="profile__button-edit"
            type="button"
          />
          <h3 className="profile__subtitle">{currentUser.about}</h3>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__button-add"
          type="button"
        />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              key={card._id}
              card={card}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
