import { useEffect, useState } from "react";
import '../index.css';
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js'

import PopupWithForm from './PopupWithForm.js'
import ImagePopup from "./ImagePopup.js";





function App(props) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closePopups = () => {
    setIsEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false)
  };

  return (
    <>
      <Header />
      <Main onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm popupId="popupProfile" formName="editProfile" id="popupFormProfile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closePopups}>
        <label htmlFor="fullName" className="popup__field">
          <input type="text" className="popup__item popup__item_type_name" placeholder="Имя" name="name" id="fullName"
            defaultValue="" minLength="2" maxLength="40" required />
          <span className="fullName-error popup__error"></span>
        </label>
        <label htmlFor="activity" className="popup__field">
          <input type="text" className="popup__item popup__item_type_activity" placeholder="О себе" name="about"
            id="activity" defaultValue="" minLength="2" maxLength="200" required />
          <span className="activity-error popup__error"></span>
        </label>
      </PopupWithForm >
      <PopupWithForm popupId="popupCard" formName="addCard" id="popupFormCard" title="Новое место" buttonText="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closePopups}>
        <label htmlFor="pictureName" className="popup__field">
          <input type="text" className="popup__item popup__item_type_card-name" placeholder="Название" name="name"
            id="pictureName" defaultValue="" minLength="2" maxLength="30" required />
          <span className="pictureName-error popup__error"></span>
        </label>
        <label htmlFor="pictureLink" className="popup__field">
          <input type="url" className="popup__item popup__item_type_card-link" placeholder="Ссылка на картинку"
            name="link" id="pictureLink" defaultValue="" required />
          <span className="pictureLink-error popup__error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm popupId="popupEditAvatar" id="popupFormAvatar" title="Обновить аватар" buttonText="Да" isOpen={isEditAvatarPopupOpen} onClose={closePopups}>
        <label for="editAvatar" className="popup__field">
          <input type="url" className="popup__item popup__item_type_card-name" placeholder="Ссылка на картинку"
            name="link" id="editAvatar" defaultValue="" required />
          <span className="editAvatar-error popup__error"></span>
        </label>
      </PopupWithForm>
      < ImagePopup card={selectedCard} onClose={closePopups}/>
    </>
  );
}

export default App;
