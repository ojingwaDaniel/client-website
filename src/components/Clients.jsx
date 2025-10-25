import React from "react";
import { motion } from "framer-motion";
import client1 from "../assets/images/BildUp/Transparent versions/1.png"
import client2 from "../assets/images/BildUp/Transparent versions/2.png"
import client3 from "../assets/images/BildUp/Transparent versions/3.png"
import client4 from "../assets/images/BildUp/Transparent versions/4.png"
import client5 from "../assets/images/BildUp/Transparent versions/5.png"
import client6 from "../assets/images/BildUp/Transparent versions/6.png"
import client7 from "../assets/images/BildUp/Transparent versions/7.png"
import client8 from "../assets/images/BildUp/Transparent versions/8.png"
import client9 from "../assets/images/BildUp/Transparent versions/9.png"

const clientImages = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9
];

const Clients = () => {
  return (
    <section id="clients" className="relative min-h-screen bg-gradient-to-tr from-slate-900 via-slate-950 to-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Unique wave pattern background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal wavy lines */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 30, 50 50 T 100 50" stroke="#feb3eb" strokeWidth="2" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)"/>
          </svg>
        </div>

        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23feb3eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>

        {/* Animated spotlight effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 animate-pulse" style={{
          background: 'radial-gradient(circle, #feb3eb 0%, transparent 70%)',
          animationDuration: '8s'
        }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 animate-pulse" style={{
          background: 'radial-gradient(circle, #ffcce8 0%, transparent 70%)',
          animationDuration: '6s',
          animationDelay: '2s'
        }}></div>

        {/* Sparkle dots - scattered */}
        <div className="absolute top-20 left-1/3 w-2 h-2 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#feb3eb', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#feb3eb', animationDuration: '5s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#feb3eb', animationDuration: '6s', animationDelay: '2s' }}></div>

        {/* Curved lines */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M 0,100 Q 50,50 100,100 T 200,100" stroke="#feb3eb" strokeWidth="3" fill="none"/>
            <path d="M 0,120 Q 50,70 100,120 T 200,120" stroke="#feb3eb" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight">
            <span className="text-white">Our </span>
            <span style={{ color: '#feb3eb' }}>Clients</span>
          </h2>
          <div className="w-32 h-1.5 mx-auto rounded-full mb-6 shadow-lg" style={{ 
            backgroundColor: '#feb3eb',
            boxShadow: '0 0 20px #feb3eb'
          }}></div>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Trusted by industry leaders and innovative brands across multiple sectors
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto"
        >
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "200+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "15+", label: "Industries Served" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group text-center p-6 rounded-2xl border-2 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm"
              style={{ borderColor: '#feb3eb' }}
            >
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-40 transition duration-500 blur-xl" style={{ backgroundColor: '#feb3eb' }}></div>
              <div className="relative">
                <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: '#feb3eb' }}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {clientImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="group relative"
            >
              <div className="relative">
                {/* Hover glow effect */}
                <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-60 transition duration-500 blur-xl" style={{ backgroundColor: '#feb3eb' }}></div>
                
                <div className="relative bg-white rounded-2xl p-6 h-32 flex items-center justify-center overflow-hidden border-2 border-transparent transition-all duration-300 group-hover:border-4 shadow-lg" style={{ 
                  borderColor: 'transparent'
                }}>
                  {/* Logo image */}
                  <img
                    src={img}
                    alt={`Client ${index + 1}`}
                    className="relative max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-2 rounded-3xl opacity-40 group-hover:opacity-60 transition duration-500 blur-xl" style={{ backgroundColor: '#feb3eb' }}></div>
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl px-10 py-8 border-2" style={{ borderColor: '#feb3eb' }}>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#feb3eb' }}>
                    <svg className="w-7 h-7 text-slate-950" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-xl">Trusted Partners</div>
                    <div className="text-gray-300 text-sm">Building lasting relationships</div>
                  </div>
                </div>
                
                <div className="hidden md:block w-px h-14 opacity-30" style={{ backgroundColor: '#feb3eb' }}></div>
                
                <div className="text-gray-100 text-lg">
                  <span className="font-bold text-xl" style={{ color: '#feb3eb' }}>Ready to join them?</span>
                  <span className="ml-2 font-light">Let's grow your brand together</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;