import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Registr() {
  return (
    <>
      <Header>
        <Link to="/sign-in" className="header__link">Войти</Link>
      </Header>
      <div className="registr__registr-container">
        <form className="registr__form" name="refistrForm" id="refistrForm">
          <h2 className="registr__heading">Регистрация</h2>
          <label htmlFor="userEmail" className="registr__field">
            <input type="text" className="registr__item registr__item_type_name" placeholder="Email" name="name"
              id="userEmail" defaultValue="" minLength="2" maxLength="30" required />
            <span className="registrEmail-error registr__error"></span>
          </label>
          <label htmlFor="userPassword" className="registr__field">
            <input type="password" className="registr__item registr__item_type_password" placeholder="Пароль" name="name"
              id="userPassword" defaultValue="" minLength="6" maxLength="30" required  />
            <span className="pictureName-error popup__error"></span>
          </label>
          <button type="submit" className="registr__button">Зарегистрироваться</button>
        </form>
      </div>
      <Link to="/sign-in" className="header__textLink">Уже зарегистрированы? Войти</Link>
    </>
  )
}
export default Registr;