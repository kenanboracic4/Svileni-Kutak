import React from "react";
import "../index.css";
import { Star } from "lucide-react";

const products = [
  {
    image: "/jastucnice.jpeg",
    title: "Svilene jastučnice",
    description:
      "Ručno tkane svilene jastučnice od 100% mulberry svile. Dostupne u elegantnim pastelnim tonovima.",
    price: "50km",
    badge: "Bestseller",
  
  },
  {
    image: "/uvijac.jpeg",
    title: "Svileni uvijač za kosu",
    description:
      "Luksuzna maska koja pruža potpunu tamu uz maksimalnu udobnost. Idealna za putovanja.",
    price: "149 kn",
    badge: "Premium",
  
  },
  {
    image: "/scrunchies.jpeg",
    title: "Svilene scrunchie",
    description:
      "Svilene gumice u harmoničnim bojama. Nježne prema kosi, sprječavaju lomljenje.",
    price: "89 kn",
    badge: "Set od 3",
   
  },
];

export default function ProductsSection() {
  return (
    <section id="product"className="products-section">
      <div className="decor-circle top-circle"></div>
      <div className="decor-circle bottom-circle"></div>

      <div className="products-container">
        <div className="products-header">
          <div className="products-tag">
            <Star className="tag-icon" />
            Naša kolekcija
          </div>
          <h2 className="products-title">Proizvodi</h2>
          <p className="products-subtitle">
            Pažljivo odabrani proizvodi od najfinijih svilenih vlakana
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="card-hover-bg"></div>

              <div className="product-image">
                <img src={product.image} alt={product.title} />
               
                <div className="image-overlay"></div>
              </div>

              <div className="card-header">
                <div className="product-meta">
                  <h3 className="product-title">{product.title}</h3>
                 
                </div>
                
              </div>

              <div className="card-content">
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
