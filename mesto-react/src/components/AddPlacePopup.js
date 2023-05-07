import React from "react";
import { useEffect, useState, useRef } from "react";
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup ({isOpen, onClose, onAddCard}) {

  const [cardName,setCardName] = useState('');

  const [cardLink,setCardLink] = useState('');

  function handleCardName (e) {
    setCardName(e.target.value);
    console.log(cardName)
  };

  function handleCardLink (e) {
    setCardLink(e.target.value);
  };

  function handleSubmit (evt) {
    evt.preventDefault();
    
    onAddCard ({
      name: cardName,
      link: cardLink,
    })
    
  };

  return (
    <PopupWithForm popupId="popupCard" formName="addCard" id="popupFormCard" title="Новое место" buttonText="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label htmlFor="pictureName" className="popup__field">
        <input type="text" className="popup__item popup__item_type_card-name" placeholder="Название" name="name"
          id="pictureName" defaultValue="" minLength="2" maxLength="30" required onChange={handleCardName} />
        <span className="pictureName-error popup__error"></span>
      </label>
      <label htmlFor="pictureLink" className="popup__field">
        <input type="url" className="popup__item popup__item_type_card-link" placeholder="Ссылка на картинку"
          name="link" id="pictureLink" defaultValue="" required onChange={handleCardLink} />
        <span className="pictureLink-error popup__error"></span>
      </label>
    </PopupWithForm>
  )
}
export default AddPlacePopup;