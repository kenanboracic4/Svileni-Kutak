import { useEffect } from "react";
import Pozadina from "./components/Pozadina.jsx";
import Navbar from "./components/Navbar.jsx";
import ShinyText from "./components/Hero.jsx";
import WhySilkSection from "./components/Why.jsx";
import Product from "./components/Product.jsx";
import ContactSection from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
       once: false, // ❗️animira i pri skrolovanju gore i dole
       easing: 'ease',
    });
  }, []);

  return (
    <>
      <Pozadina
        speed={3.5}
        scale={1}
        color="#6b1bb50d"
        noiseIntensity={0.5}
        rotation={0}
        style={{ zIndex: -1 }}
      />

      <Navbar />

      {/* Hero sa AOS */}
      
        <ShinyText
          text="Ručno izrađeni proizvodi od čiste Mulberry svile!"
          disabled={false}
          speed={3}
          className="custom-class"
        />
     

      {/* Sekcije sa AOS */}
      <div data-aos="fade-up">
        <WhySilkSection />
      </div>

      <div data-aos="zoom-in">
        <Product />
      </div>

      <div data-aos="fade-up">
        <ContactSection />
      </div>

      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
}

export default App;
