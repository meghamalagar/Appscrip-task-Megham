import React from "react";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          
          <div className="center-logo">
            <h1 className="logo-text">LOGO</h1>
          </div>
          <div className="icons">
            <a href="#search" className="icon"><i className="fas fa-search"></i></a>
            <a href="#wishlist" className="icon"><i className="fas fa-heart"></i></a>
            <a href="#profile" className="icon"><i className="fas fa-user"></i></a>
            <a href="#cart" className="icon"><i className="fas fa-shopping-cart"></i></a>
            <div className="language-selector">
              ENG <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </header>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item"><a href="#shop">Shop</a></li>
          <li className="nav-item"><a href="#skills">Skills</a></li>
          <li className="nav-item"><a href="#stories">Stories</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </>
  );
}
