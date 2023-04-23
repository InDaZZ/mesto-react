import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_active" : ""}`} id={props.popupId} >
      <div className="popup__container">
        <form className="popup__form" name={props.formName} id={props.id}>
          <button type="button" className="popup__button-close" onClick={props.onClose}></button>
          <h2 className="popup__heading">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__button">{props.buttonText}</button>
        </form>

      </div>
    </div>
  )
};

export default PopupWithForm;