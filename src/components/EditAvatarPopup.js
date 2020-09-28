import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar, isLoading} = props;
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [onClose]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      button="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
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
            ref={avatarRef}
          />
          <span className="popup__input-error" id="link-input-error" />
        </label>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
