import React from "react";
import "../index.css";
import { Instagram, Facebook } from "lucide-react";
import logo from "/logo.png"; // zamijeni putanju ako je drugačija

export default function Footer() {
  return (
    <footer id="footer"className="footer">
      <div  className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Svilena Galanterija Logo" className="footer-logo" />
         
        </div>

        <div className="footer-message">
  <p>Dodir luksuza, nježnosti i tradicije — svaka nit svile priča svoju priču.</p>
</div>

        <div className="footer-contact">
         
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> <Instagram size={20} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
           
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Svileni Kutak. Sva prava zadržana.</p>
      </div>
    </footer>
  );
}
