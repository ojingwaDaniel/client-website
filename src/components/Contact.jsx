import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react"; 

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
      window.open("https://wa.me/2348012345678", "_blank");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Visual Placeholder */}
        <motion.div
          className="contact-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-image-placeholder">
            <div className="neon-circle-animation">
              <span className="pulse-text">📡</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Text */}
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

          {/* CTA Button Group */}
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
