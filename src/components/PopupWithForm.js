import React from "react";

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_${props.name} ${props.isOpen && "popup_opened"}`}
    >
      <form className="popup__container" noValidate>
        <button
          onClick={props.onClose}
          className="popup__button-close"
          type="button"
        />
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
        <button className="popup__button-save" type="submit">
          {props.button}
        </button>
      </form>
    </section>
  );
}

export default PopupWithForm;
