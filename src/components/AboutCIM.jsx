import React from "react";
import { motion } from "framer-motion";
import Cert from "../assets/images/Cert.jpg";

const AboutCIM = () => {
  return (
    <section id="about-cim" className="about-cim-section">
      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-cim-title">
            We are CIM (The Chartered Institute of Marketing)
            <span className="brand-color-text"> Certified!</span>
          </h2>
          <p className="about-cim-description">
            As CIM-certified professionals, we deliver unparalleled marketing expertise.  
            What does this mean for your business? It means strategies that drive real growth,  
            campaigns that resonate, and a clear path to achieving your goals.
          </p>
        </motion.div>

        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-cim-image-placeholder">
            <img src={Cert} alt="CIM Certificate" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCIM;
