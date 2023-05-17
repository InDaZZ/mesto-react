import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Header>
        <Link to="/sign-in" className="header__link">Регистрация</Link>
      </Header>
      <div className="login__login-container">
        <form className="login__form" name="refistrForm" id="refistrForm">
          <h2 className="login__heading">Вход</h2>
          <label htmlFor="userEmail" className="login__field">
            <input type="text" className="login__item login__item_type_name" placeholder="Email" name="name"
              id="userEmail" defaultValue="" minLength="2" maxLength="30" required />
            <span className="loginEmail-error login__error"></span>
          </label>
          <label htmlFor="userPassword" className="login__field">
            <input type="password" className="login__item login__item_type_password" placeholder="Пароль" name="name"
              id="userPassword" defaultValue="" minLength="6" maxLength="30" required  />
            <span className="pictureName-error popup__error"></span>
          </label>
          <button type="submit" className="login__button">Войти</button>
        </form>
      </div>
    </>
  )
}
export default Login;