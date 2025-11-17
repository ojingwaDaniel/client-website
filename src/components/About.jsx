import React from "react";
import { motion } from "framer-motion";
import BrandingImage from "../assets/images/BildUp/1.jpg";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-10" style={{ backgroundColor: '#feb3eb' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-10" style={{ backgroundColor: '#feb3eb' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
      
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#feb3eb' }}>
            About BildUp
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#feb3eb' }}></div>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-slate-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border shadow-2xl" style={{ borderColor: '#feb3eb' }}>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              At BildUp, we are not just a digital marketing & advertising agency, we are your partner in building brands that stand out. We craft bold strategies, compelling content, and authentic connections that turn your audiences into loyal clients and customers. With expert experience across industries like <span className="font-semibold" style={{ color: '#feb3eb' }}>beauty, food, tech, real estate, fashion, health & wellness and luxury</span>, we deliver results that grow your business and leave a lasting impact. With BildUp, <span className="font-semibold" style={{ color: '#feb3eb' }}>results are guaranteed</span>. We make strategic digital marketing decisions for your brand to ensure your business objectives are creatively brought to live!
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl opacity-50 group-hover:opacity-75 transition duration-500 blur-xl" style={{ 
                backgroundColor: '#feb3eb'
              }}></div>
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-2" style={{ borderColor: '#feb3eb' }}>
                <img 
                  src= {BrandingImage}
                  alt="About BildUp" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#feb3eb' }}>
              Why Choose BildUp?
            </h2>
            <p className="text-gray-100 text-lg leading-relaxed mb-8">
             At BildUp, we don’t just deliver marketing, we are building brand’s legacy. Born from the phrase “to build something from the ground up,” BildUp represents creativity, growth, and transformation. We exist to help brands rise amidst the noise and connect with people in powerful, lasting ways.
            </p>
            <p className="text-gray-100 text-lg leading-relaxed">
             We combine strategy, storytelling, and data-driven creativity to deliver marketing that not only performs but inspires. Whether it’s social media marketing, content creation, paid advertising, or brand development, every project we handle is built on one core belief, <span className="font-semibold" style={{ color: '#feb3eb' }}>your brand deserves to grow, not just exist</span>.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us - Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Here's why businesses and creators trust BildUp
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Strategic Creativity",
                description: "Every campaign we craft blends creative storytelling with smart marketing insights to achieve measurable results."
              },
              {
                title: "Results That Matter",
                description: "From increased engagement to improved brand awareness, we focus on outcomes that grow your business and show obvious return on investment."
              },
              {
                title: "Data-Driven Decisions",
                description: "Our strategies are guided by audience insights, analytics, and performance tracking, not guesswork."
              },
              {
                title: "Human-Centered Approach",
                description: "We build genuine connections between brands and people through authentic narratives and memorable experiences."
              },
              {
                title: "All-in-One Marketing Solution",
                description: "From SEO & performance marketing to personal branding & portfolio management, or social media marketing & paid advertising, BildUp provides end-to-end marketing services that scale with you."
              },
              {
                title: "Industry Expertise",
                description: "With proven experience across beauty, food, tech, real estate, fashion, health & wellness, and luxury sectors, we understand your market deeply."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="h-full bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl" style={{ 
                  borderColor: '#feb3eb',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
                }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ 
                    backgroundColor: '#feb3eb'
                  }}>
                    <svg className="w-6 h-6 text-slate-950" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#feb3eb' }}>
                    {feature.title}
                  </h4>
                  <p className="text-gray-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block backdrop-blur-sm rounded-2xl px-8 py-6 border-2" style={{ 
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            borderColor: '#feb3eb'
          }}>
            <p className="text-2xl md:text-3xl font-bold text-white">
              At BildUp, we're not just marketing your brand,
            </p>
            <p className="text-2xl md:text-3xl font-bold mt-2" style={{ color: '#feb3eb' }}>
              we are building your brand's legacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;