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

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
      {services.map((service, i) => (
        <motion.div
          key={i}
          className="service-card rounded-lg overflow-hidden bg-white shadow-md"
          whileHover="hover"
        >
          {/* Image fills container, no whitespace */}
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-40 object-cover object-[50%_20%] block"
            variants={{
              hover: { scale: 1.1 },
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Content area */}
          <div className="p-4">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
