
import heroImage from "../assets/images/hero-image.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={heroImage} alt="Hero" className="hero-bg" />
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span>Bildup Marketing Agency</span>
        </h1>
        <p className="hero-bullets">
          Welcome to Buildup Marketing Agency. At Bildup, we don’t just deliver
          marketing we build movements.
        </p>
      </div>
    </section>
  );
};

export default Hero;
