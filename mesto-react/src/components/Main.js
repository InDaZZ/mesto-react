import React from 'react';
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import { useEffect, useState } from "react";
import { Api, api } from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';

function Main({ onCardClick, onEditAvatar, onEditProfile, onAddPlace, onCardLike, cards, onCardDelete }) {

  const [userName, setUserName] = useState('');

  const [userDescription, setUserDescription] = useState('');

  const [userAvatar, setUserAvatar] = useState('');

  

  const userContext = React.useContext(CurrentUserContext);
  

  
  return (

    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userContext.avatar} alt="Фото-профиля" className="profile__avatar" onClick={onEditAvatar} />
          <img src={require('../images/edit-profile-avatar.png')} alt="Иконка-редактирования"
            className="profile__edit-avatar" />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userContext.name}</h1>
          <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
          <p className="profile__activity">{userContext.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          
          return (
            
            <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>
          )
        }
        )}
      </section>
    </main >
  )
};

export default Main;