import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="topHeader">
      <div class="overlay">
        <h1 className="h1text">Dreamer's Lane</h1>
        <h3 className="h3text">Where Dreams Walk Into Reality...</h3>
        <br />
      </div>
    </header>
  );
};

export default Header;
