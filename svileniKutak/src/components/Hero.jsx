import '../index.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <section className="hero-section">
      <div
        className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
        style={{ animationDuration }}
      >
        {text}
      </div>

     <div className="hero-buttons">
  <a href="#product" className="btn primary">Pogledaj proizvode</a>
  <a href="#contact" className="btn secondary">Naruči</a>
</div>

    </section>
  );
};

export default ShinyText;
