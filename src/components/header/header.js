import React from "react";
import "../../styles/header.css";
import Login from "./login";
import { useNavigate } from "react-router-dom";

const Header = ({ onBackButtonClick }) => {
    // const navigate = useNavigate();
    const handleCLickBeck = () => {
        onBackButtonClick();
    }
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
        <Login/>
      </div>
    </div>
  );
};

export default Header;
