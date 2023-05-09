import React from 'react';
import { useEffect, useState } from "react";
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { Api, api } from '../utils/Api.js';
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from "./ImagePopup.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';

function App(props) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((error) => console.log(`Ошибка :( ${error})`));
  }, []);

  React.useEffect(() => {

    api.getTaskCards()
      .then((res) => {
        setCards(res)
      })

      .catch((error) => console.log(`Ошибка :( ${error})`));
  }, []);

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
    setSelectedCard({})
  };

  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard.link

  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closePopups();
      }
    }
    if(isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen]) 


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch((error) => console.log(`Ошибка :( ${error})`));
  };

  function handleCardDelete(card) {
    api.deleteTask(card._id,).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id))
    })
      .catch((error) => console.log(`Ошибка :( ${error})`));
  };

  function handleUpdateUser(data) {
    setIsLoading(true)
    api.setUserInfo({ data }).then((newInfo) => {
      setCurrentUser(newInfo)
      closePopups()
    })
      .catch((error) => console.log(`Ошибка :( ${error})`))
      .finally(()=>{setIsLoading(false)})
  };

  function handleUpdateAvatar(newAvatar) {
    setIsLoading(true)
    api.pathTaskFromAvatar(newAvatar)
      .then((newData) => {
        setCurrentUser(newData);
        closePopups();
      })
      .catch((error) => console.log(`Ошибка :( ${error})`))
      .finally(()=>{setIsLoading(false)})

  }

  function handleAddPlaceSubmit(data) {
    setIsLoading(true)
    api.postTask({ data }).then((newCard) => {
      setCards([newCard, ...cards]);
      closePopups();
    })
      .catch((error) => console.log(`Ошибка :( ${error})`))
      .finally(()=>{setIsLoading(false)})
  }


  return (
   
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardLike={handleCardLike} cards={cards} onCardDelete={handleCardDelete} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closePopups} onUpdateUser={handleUpdateUser} isLoading ={isLoading} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closePopups} onAddCard={handleAddPlaceSubmit} isLoading ={isLoading} />


        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closePopups} onUpdateAvatar={handleUpdateAvatar} />
        
        < ImagePopup card={selectedCard} onClose={closePopups} />
      </CurrentUserContext.Provider>
    
  );
}

export default App;
