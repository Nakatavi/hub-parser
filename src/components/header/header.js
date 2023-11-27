import React, { useEffect } from "react";
import "../../styles/header.css";

const Header = ({ onBackButtonClick }) => {
  return (
    <div className="header">
      <div className="left-block">
        <img className="header-logo-image" src="Group 2.png" alt="logo" />
        <button className="back" onClick={onBackButtonClick}>
          <div className="go-home">
            <img className="header-backspace-image" src="backspace.png" alt="backspace"/>
            <div>Go Home</div>
          </div>
        </button>
      </div>
      <div className="right-block">
      </div>
    </div>
  );
};

export default Header;
