import { Children } from 'react';
import headerLogo from '../images/Logo.png'
function Header({children,exit}) {
  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="Логотип-'Mesto'"/>
      {children}
    </header>
    
  )
};

export default Header;