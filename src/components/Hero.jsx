
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
        <h2 className="hero-tagline">8 Years of Delivering:</h2>
        <ul className="hero-bullets">
          <li>Data-Driven Disruption</li>
          <li>Compelling Stories</li>
          <li>Tailored Strategies</li>
          <li>Measurable Success</li>
          <li>Comprehensive Planning</li>
          <li>Strategic Insight</li>
          <li>Digital Transformation</li>
          <li>Expert Management</li>
          <li>Innovative Campaigns</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
