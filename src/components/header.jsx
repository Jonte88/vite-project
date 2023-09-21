import React from "react";
import "./header.css";
import Logo from '../assets/logo.png';

function Header() {
  
  return (
    <nav>
        <img src={Logo} alt="Tomelilla kommun"/>
        <h1>Tomelilla kommun</h1>
    </nav>
  );
}

export default Header;
