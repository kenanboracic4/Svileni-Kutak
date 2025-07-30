import React from "react";
import "../index.css";
import { Sparkles, Shield, Droplets, Moon, Heart,Feather } from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="icon" />,
    title: "Prirodna ljepota",
    description:
      "Svila prirodno njeguje kožu i kosu, čuvajući njihovu prirodnu vlažnost i sjaj kroz noć.",
  },
  {
    icon: <Shield className="icon" />,
    title: "Hipoalergenska",
    description:
      "Prirodno otporna na grinje, bakterije i gljivice, savršena za najosjetljiviju kožu.",
  },
  {
    icon: <Droplets className="icon" />,
    title: "Regulira vlažnost",
    description:
      "Inteligentno upija i otpušta vlagu, održavajući idealnu ravnotežu hidratacije.",
  },
  {
    icon: <Moon className="icon" />,
    title: "Savršen san",
    description:
      "Ultra glatka površina eliminira trenje i sprječava nastanak nabora i lomljenje kose.",
  },
  {
    icon: <Heart className="icon" />,
    title: "Luksuzni doživljaj",
    description:
      "Neusporediva mekоća i elegancija koja transformira svaku noć u spa iskustvo.",
  },
  {
    icon: <Feather className="icon" />,
    title: "Luksuzni doživljaj",
    description:
      "Neusporediva mekоća i elegancija koja transformira svaku noć u spa iskustvo.",
  },
];

export default function WhySilkSection() {
  return (
    <section id="why" className="why-silk-section">
      <div className="decorative-bg top-circle"></div>
      <div className="decorative-bg bottom-circle"></div>

      <div className="why-silk-wrapper">
        <div className="why-silk-header">
          <div className="tagline">
            <Sparkles className="tag-icon" />
            Otkrijte čaroliju svile
          </div>
          <h2 className="why-silk-title">Zašto svila?</h2>
          <p className="why-silk-subtitle">
            Prirodni luksuz koji transformira vaš san i njeguje vašu ljepotu
          </p>
        </div>

        <div className="why-silk-grid">
          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <div className="card-overlay"></div>
              <div className="card-header">
                <div className="icon-wrapper">{reason.icon}</div>
                <h3 className="card-title">{reason.title}</h3>
              </div>
              <div className="card-content">
                <p className="card-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
