import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <header>
      <img src={ logo } alt="star wars logo" height="150px" className="logo-image" />
    </header>
  );
}

export default Header;
