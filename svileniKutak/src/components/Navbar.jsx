import { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
//------------------------------
//pravaaaaaaaaaaaaaaaaaaaaaaaaaaaa

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="h-naslov" className="logo-link">
            <h1 className="h-naslov">Svileni Kutak</h1>
          </a>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">Početna</a></li>
            <li className="nav-item"><a href="#why" className="nav-link">Prednosti</a></li>
            <li className="nav-item"><a href="#product" className="nav-link">Proizvodi</a></li>
          </ul>
          <a href="#contact"className="contact-btn">Kontakt</a>
        </div>

        {/* Hamburger button */}
        <div className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="hamburger-line top-line"></span>
          <span className="hamburger-line middle-line"></span>
          <span className="hamburger-line bottom-line"></span>
        </div>
      </div>

      {/* Fullscreen mobile overlay menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}>
        <ul className="mobile-nav">
          <li className="mobile-nav-item">
            <a href="/services" className="mobile-nav-link" onClick={toggleMenu}>Početna</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#why" className="mobile-nav-link" onClick={toggleMenu}>Prednosti</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#products" className="mobile-nav-link" onClick={toggleMenu}>Proizvodi</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#contact" className="mobile-contact-btn" onClick={toggleMenu}>Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
