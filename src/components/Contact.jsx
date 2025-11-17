import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react"; 
import whiteLogo from "../assets/images/logo/Bildup white logo.png";

const Contact = () => {
  const handleRedirect = (type) => {
    if (type === "mail") {
      window.location.href = "mailto:Info@bildup.net";
    } else if (type === "instagram") {
      window.open(
        "https://www.instagram.com/bildupng?igsh=MWx6ZTdxczA3YXUzbw==",
        "_blank"
      );
    } else if (type === "whatsapp") {
      window.open("https://wa.me/2347087782222", "_blank");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={whiteLogo} alt="company-logo" className="w-700 h-auto" />
        </motion.div>

        <motion.div
          className="contact-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">Let's Build the Future</h2>
          <p className="contact-description">
            Have a project in mind? We're excited to bring your ideas to life.
            Reach out and let's make magic together.
          </p>

          <div className="cta-buttons">
            <button
              onClick={() => handleRedirect("mail")}
              className="cta-button glow"
            >
              <Mail className="cta-icon" />
              Email Us
            </button>

            <button
              onClick={() => handleRedirect("instagram")}
              className="cta-button glow"
            >
              <Instagram className="cta-icon" />
              DM on Instagram
            </button>

            <button
              onClick={() => handleRedirect("whatsapp")}
              className="cta-button glow"
            >
              <Phone className="cta-icon" />
              DM on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
