import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeleteCardPopup(props) {
    const { card, isOpen, onClose, onDelete } = props;

    function handleSubmit(evt) {
      evt.preventDefault();
      onDelete(card);
    }


    return (
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        button="Да"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      ></PopupWithForm>
    );
}

export default ConfirmDeleteCardPopup;