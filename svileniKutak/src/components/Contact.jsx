import React from "react";
import { Mail, Phone, MapPin, Send, Heart } from "lucide-react";
import "../index.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      {/* Dekoracija pozadine */}
      <div className="bg-decor top-right"></div>
      <div className="bg-decor bottom-left"></div>

      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <Heart className="icon" />
            Povežimo se
          </div>
          <h2 className="contact-title">Kontakt</h2>
          <p className="contact-subtitle">
            Imate pitanja o našim svilenim proizvodima? Rado ćemo vam pomoći!
          </p>
        </div>

        <div className="contact-grid">
          {/* Lijeva strana - slika i info */}
          <div className="contact-image-wrapper">
            <div className="contact-image">
              <img src="/kontaktSlika.jpeg" alt="Luksuzna svilena posteljina" />
              <div className="image-overlay"></div>

              <div className="info-card top-left">
                <Phone className="icon-bg" />
                <div>
                  <p className="info-title">Pozovite nas</p>
                  <p className="info-text">+387 1 234 5678</p>
                </div>
              </div>

              <div className="info-card bottom-right">
                <MapPin className="icon-bg" />
                <div>
                  <p className="info-title">Posjetite nas</p>
                  <p className="info-text">Sarajevo, BiH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desna strana - forma */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <div className="form-header">
                <h3>Pošaljite nam poruku</h3>
                <p>Odgovorit ćemo vam u roku od 24 sata. Vaše zadovoljstvo je naš prioritet.</p>
              </div>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Ime</label>
                    <input id="firstName" placeholder="Vaše ime" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Prezime</label>
                    <input id="lastName" placeholder="Vaše prezime" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email adresa</label>
                  <input id="email" type="email" placeholder="vas.email@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefon (opcionalno)</label>
                  <input id="phone" type="tel" placeholder="+387 1 234 5678" />
                </div>

               

                <div className="form-group">
                  <label htmlFor="message">Poruka</label>
                  <textarea id="message" placeholder="Napišite vašu poruku ovdje..." rows={5}></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <Send className="icon" />
                  Pošaljite poruku
                </button>

                <div className="contact-footer">
                  <div className="contact-footer-info">
                    <Mail className="icon-sm" />
                    <span>svilenikutak@gmail.com</span>
                  </div>
                  <span className="dot"></span>
                  <div className="contact-footer-info">
                    <Phone className="icon-sm" />
                    <span>+387 1 234 5678</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
