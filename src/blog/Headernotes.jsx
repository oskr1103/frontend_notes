import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

import "./Headernotes.css";

const Headernotes = () => {
  return (
    <div className="containerHeader">
      <div className="containerHeader__header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/create" className="btn__createNotes">
          <i className="fa-solid fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default Headernotes;
