import React from "react";

function PopupWithForm(props) {
  const {
    name,
    isOpen,
    onClose,
    title,
    children,
    button,
    onSubmit,
    isLoading,
    isValid,
  } = props;
  return (
    <section className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <form className="popup__container" onSubmit={onSubmit} noValidate>
        <button
          onClick={onClose}
          className="popup__button-close"
          type="button"
        />
        <h3 className="popup__title">{title}</h3>
        {children}
        <button className="popup__button-save" type="submit" disabled={isValid}>
          {isLoading ? "Сохранение..." : button}
        </button>
      </form>
    </section>
  );
}

export default PopupWithForm;
