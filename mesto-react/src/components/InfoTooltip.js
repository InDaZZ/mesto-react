import { useState } from "react";

import { Link } from "react-router-dom";
import sucsess from "../images/Unionsuccess.png"

function InfoTooltip ( {isOpen, popupId, onClose, title, image}) {
  return ( 
    <div className={`popup ${isOpen ? "popup_active" : ""}`} id={popupId} >
    <div className="popup__container">
        <button type="button" className="popup__button-close" onClick={onClose}></button>
        <img src={sucsess} alt="#" className="popup__image-info"></img>
        <h2 className="popup__heading-info">Вы успешно зарегистрировались!</h2>
        
    </div>
  </div>
  )
}
export default InfoTooltip;