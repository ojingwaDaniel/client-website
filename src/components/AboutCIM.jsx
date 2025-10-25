import React from "react";
import { motion } from "framer-motion";
import CIM from "../assets/images/Cert.jpg"

const AboutCIM = () => {
  return (
    <section id="about-cim" className="relative min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-10" style={{ backgroundColor: '#feb3eb' }}></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-10" style={{ backgroundColor: '#feb3eb' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="px-6 py-3 rounded-full border-2 inline-flex items-center gap-3" style={{ 
                borderColor: '#feb3eb',
                backgroundColor: 'rgba(254, 179, 235, 0.1)'
              }}>
                <svg className="w-6 h-6" style={{ color: '#feb3eb' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#feb3eb' }}>
                  Certified Excellence
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">We are </span>
              <span className="text-white">CIM</span>
              <br />
              <span className="text-gray-300 text-3xl md:text-4xl">(The Chartered Institute of Marketing)</span>
              <br />
              <span style={{ color: '#feb3eb' }}>Certified!</span>
            </h2>

            {/* Description */}
            <p className="text-gray-100 text-lg md:text-xl leading-relaxed">
              As CIM-certified professionals, we deliver unparalleled marketing expertise. What does this mean for your business? It means strategies that drive real growth, campaigns that resonate, and a clear path to achieving your goals.
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-4">
              {[
                "Industry-recognized certification standards",
                "Proven expertise in modern marketing",
                "Data-driven strategies that deliver results",
                "Continuous professional development"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#feb3eb' }}>
                    <svg className="w-4 h-4 text-slate-950" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-100 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              
            </motion.div>
          </motion.div>

          {/* Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 rounded-3xl opacity-50 group-hover:opacity-75 transition duration-500 blur-xl" style={{ 
                backgroundColor: '#feb3eb'
              }}></div>
              
              {/* Main certificate container */}
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden border-2 shadow-2xl" style={{ borderColor: '#feb3eb' }}>
                {/* Certificate image */}
                <img 
                  src= {CIM }
                  alt="CIM Certificate" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient for better visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 rounded-tr-2xl" style={{ borderColor: '#feb3eb' }}></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 rounded-bl-2xl" style={{ borderColor: '#feb3eb' }}></div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl border-2 shadow-xl backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  borderColor: '#feb3eb'
                }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#feb3eb' }}>CIM</div>
                  <div className="text-xs text-gray-300 font-semibold">CERTIFIED</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -z-10 top-10 -right-10 grid grid-cols-4 gap-3 opacity-30">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: '#feb3eb' }}></div>
              ))}
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};

export default AboutCIM;