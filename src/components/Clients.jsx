import React from "react";
import { motion } from "framer-motion";
import {clientImages} from "../data/clientData"

const Clients = () => {
  return (
    <section id="clients" className="section clients">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Our <span className="brand-color-text"> Clients</span>
      </motion.h2>

      <div className="client-layout client-grid">
        {clientImages.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Client ${i + 1}`}
            className="client-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
