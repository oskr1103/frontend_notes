import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

import "./Headernotes.css";

const Headernotes = () => {
  return (
    <div className="containerHeader bg__header">
      <div className="containerHeader__header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Link to="/create" className="btn__createNotes">
          <i className="fa-solid fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default Headernotes;
