import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../stuffs/imgs/logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="WanderDrafts Logo" className="logo-img" />
      </Link>

      <nav className="nav">
        <Link to="/about">About</Link>
        {/* You can add more links later */}
      </nav>
    </header>
  );
};

export default Header;
