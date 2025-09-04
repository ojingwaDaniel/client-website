import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/images/Image.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-placeholder">
            <img src={Image} alt="About BildUp" />
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">Why BildUp</h2>

          <p className="about-description">
            <span className="glow-text">
              Tailored Strategies. Proven Impact.{" "}
            </span>
            We craft solutions tailored to your brand's unique goals, ensuring
            every move delivers measurable impact.
          </p>

          <p className="about-description">
            <span className="glow-text">Results, Not Hype. </span>
            We focus on what works, cutting through the noise to deliver real
            outcomes that matter to your growth.
          </p>

          <p className="about-description">
            <span className="glow-text">ROI-Driven Pricing. </span>
            No hidden costs—our pricing is designed to maximize your ROI,
            ensuring value at every step.
          </p>

          <p className="about-description">
            <span className="glow-text">
              Built for Visionaries & Innovators.{" "}
            </span>
            We partner with forward-thinking brands ready to challenge norms and
            lead in their industries.
          </p>

          <p className="about-description">
            <span className="glow-text">Global Expertise. </span>
            With a presence across the UK, USA, Canada, Dubai, Gambia, Zambia,
            and Nigeria, we bring international insights and a world-class
            perspective to every project.
          </p>

          <p className="about-description">
            <span className="glow-text">Data-Driven Growth. </span>
            We leverage analytics and insights to drive smarter decisions,
            helping your brand grow sustainably and profitably.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
