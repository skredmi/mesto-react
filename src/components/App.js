import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard();
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          button="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="popup__fields">
            <label className="popup__field">
              <input
                type="text"
                className="popup__input popup__name"
                required
                minLength="2"
                maxLength="40"
                id="name-input"
                name="name"
              />
              <span className="popup__input-error" id="name-input-error"></span>
            </label>
            <label className="popup__field">
              <input
                type="text"
                className="popup__input popup__about"
                required
                minLength="2"
                maxLength="200"
                id="about-input"
                name="about"
              />
              <span
                className="popup__input-error"
                id="about-input-error"
              ></span>
            </label>
          </div>
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="Новое место"
          button="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="popup__fields">
            <label className="popup__field">
              <input
                type="text"
                placeholder="Название"
                className="popup__input popup__place"
                required
                minLength="1"
                maxLength="30"
                id="place-input"
                name="name"
              />
              <span
                className="popup__input-error"
                id="place-input-error"
              ></span>
            </label>
            <label className="popup__field">
              <input
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__input popup__link"
                required
                id="link-input"
                name="link"
              />
              <span className="popup__input-error" id="link-input-error"></span>
            </label>
          </div>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          button="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <div className="popup__fields">
            <label className="popup__field">
              <input
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__input popup__link"
                required
                id="link-input"
                name="link"
              />
              <span className="popup__input-error" id="link-input-error"></span>
            </label>
          </div>
        </PopupWithForm>
        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          button="Да"
          onClose={closeAllPopups}
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      </div>
    </>
  );
}

export default App;