import React from 'react';
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import { useEffect, useState } from "react";
import { Api, api } from '../utils/Api.js';
import Card from './Card.js'


api.getUserInfo()
.then((res)=>{
  console.log(res)
})

function Main({ onCardClick, onEditAvatar, onEditProfile, onAddPlace}) {
  
  const [userName,setUserName] = useState('');

  const [userDescription,setUserDescription]= useState('');

  const [userAvatar,setUserAvatar]= useState('');

  const [cards,setCards]= useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setUserName(res.name) 
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    })
  });
   
  React.useEffect(() => {
    api.getTaskCards()
    .then((res) => {
      setCards(res)
    })
  },[]);
  
  
  return (

    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={`${userAvatar}`} alt="Фото-профиля" className="profile__avatar" onClick={onEditAvatar} />
          <img src={require('../images/edit-profile-avatar.png')} alt="Иконка-редактирования"
            className="profile__edit-avatar" />
        </div>
        
        <div className="profile__info">
          <h1 className="profile__name">{`${userName}`}</h1>
          <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
          <p className="profile__activity">{`${userDescription}`}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map( (card,i) => {
          return(
          <Card card = {card} key={card._id} onCardClick={onCardClick}/>
        )} 
        )}
      </section>
      
      
      
      <PopupWithForm popupId="popupConfirmDeletion" popupContainerId="" title="Вы уверены?" buttonText="">
        <label htmlFor="editAvatar" className="popup__field">
          <input type="url" className="popup__item popup__item_type_card-name" placeholder="Ссылка на картинку"
            name="link" id="editAvatar" defaultValue="" required />
          <span className="editAvatar-error popup__error"></span>
        </label>
      </PopupWithForm>

    </main >
  )
};

export default Main;