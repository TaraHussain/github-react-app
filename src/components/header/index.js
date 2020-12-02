import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="logo.png" id="logo" alt="Logo" className="img" />
      <h1>Repo Search</h1>
    </header>
  );
};

export default Header;
