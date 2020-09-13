import React from "react";

function ImagePopup(props) {
    return (
        <section className={`popup popup-photo ${props.card && "popup_opened"}`}>
            <div className="popup-photo__container">
                <img src={props.card ? props.card.link : ""} alt={props.card ? props.card.name : ""} className="popup-photo__place" />
                <p className="popup-photo__title">{props.card ? props.card.name : ""}</p>
                <button
                    onClick={props.onClose}
                    className="popup__button-close"
                    type="button"
                ></button>
            </div>
        </section>
    );
}

export default ImagePopup;