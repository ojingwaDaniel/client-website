import { motion } from "framer-motion";
import { services } from "../data/servicesData";

const Services = () => (
  <section id="services" className="section services-modern">
    <motion.h2
      className="section-title"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Our Services
    </motion.h2>

    {/* 3 per row, but container made wider */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
      {services.map((service, i) => (
        <div
          key={i}
          className="service-card bg-white shadow-lg rounded-xl p-6"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-40 object-cover object-top rounded-md"
          />

          <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
