import React from "react";
import "./header.css";
import Logo from '../assets/logo.jpg';

function Header() {
  
  return (
    <nav>
        <img src={Logo} alt="Tre kronor"/>
        <h1>Sverige</h1>
    </nav>
  );
}

export default Header;
