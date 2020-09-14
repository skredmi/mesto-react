import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserProfile()])
      .then((result) => {
        setUserAvatar(result[1].avatar);
        setUserName(result[1].name);
        setUserDescription(result[1].about);
        setCards(result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar">
          <img
            src={userAvatar}
            alt="Аватар профиля"
            className="profile__avatar-img"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__button-edit"
            type="button"
          />
          <h3 className="profile__subtitle">{userDescription}</h3>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__button-add"
          type="button"
        />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card onCardClick={props.onCardClick} key={card._id} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
