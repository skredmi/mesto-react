import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace, isLoading } = props;
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  // const [isValid, setIsValid] = React.useState({name:false, link:false});
  // const [validationMessage, setValidationMessage] = React.useState("");
  // const [inputValue, setInputValue] = React.useState({name:"", link:""})

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [onClose]);

  // function inputValidate (evt) {
  //   if (evt.target.validity.valid) {
  //     setIsValid(false);
  //     setValidationMessage(evt.target.validationMessage);
  //   } else {
  //     setIsValid(true);
  //     setValidationMessage("");
  //   }
  // }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name,
      link
    });
  }

  // function handleInputChange (evt) {
  //   const {name, value} = evt.target;

  //   setInputValue({
  //     ...inputValue,
  //     [name]: value,
  //   });
  //   setIsValid({
  //     ...isValid,
  //     [name]: evt.target.validity.valid,
  //   });
  //   setValidationMessage({
  //     ...validationMessage,
  //     [name]: evt.target.validationMessag,
  //   });
  // }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      button="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
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
            value={name}
            onChange={handleNameChange}
          />
          <span className="popup__input-error" id="place-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popup__link"
            required
            id="link-input"
            name="link"
            value={link}
            onChange={handleLinkChange}
          />
          <span
            className="popup__input-error"
            id="link-input-error"
          >
          </span>
        </label>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
