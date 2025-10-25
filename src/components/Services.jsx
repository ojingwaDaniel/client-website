import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "SOCIAL MEDIA MARKETING",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?cs=srgb&dl=pexels-tracy-le-blanc-67789-607812.jpg&fm=jpg",
    description: `Our social media marketing services help businesses grow their online presence and engage with their target audience effectively. At BildUp we specialize in social media strategy, content creation, and campaign management across platforms like Facebook, Instagram, LinkedIn, and TikTok. By leveraging analytics, trends, and performance tracking, we ensure your brand stays visible and competitive online.`,
    keywords: "social media marketing services, Instagram marketing, TikTok growth, social media management"
  },
  {
    title: "CONTENT CREATION",
    image:
      "https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?cs=srgb&dl=pexels-cowomen-1058097-2041396.jpg&fm=jpg",
    description:
      "Our social media marketing services help businesses grow their online presence and engage with their target audience effectively. At BildUp we specialize in social media strategy, content creation, and campaign management across platforms like Facebook, Instagram, LinkedIn, and TikTok. By leveraging analytics, trends, and performance tracking, we ensure your brand stays visible and competitive online.",
    keywords: "social media marketing services, Instagram marketing, TikTok growth, social media management"
  },
  {
    title: "TRAINING & WORKSHOPS",
    image:
      "https://images.pexels.com/photos/8761351/pexels-photo-8761351.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8761351.jpg&fm=jpg",
    description: "At BildUp we believe in building skills that matter. Our training and workshops empower businesses, entrepreneurs, and professionals with practical marketing skills. We provide hands-on learning experiences on social media marketing, content creation, digital strategy, and analytics to help you or your team stay ahead in the ever-evolving digital landscape.",
    keywords: "marketing training workshops, digital marketing training, corporate branding training"
  },
  {
    title: "PAID ADS & PERFORMANCE MARKETING",
    image:
      "https://images.pexels.com/photos/15096572/pexels-photo-15096572.jpeg?cs=srgb&dl=pexels-srijonism-15096572.jpg&fm=jpg",
    description:
      "At BildUp we believe in building skills that matter. Our training and workshops empower businesses, entrepreneurs, and professionals with practical marketing skills. We provide hands-on learning experiences on social media marketing, content creation, digital strategy, and analytics to help you or your team stay ahead in the ever-evolving digital landscape.",
    keywords: "marketing training workshops, digital marketing training, corporate branding training"
  },
  {
    title: "DATA ANALYTICS & AUDIENCE INSIGHTS",
    image:
      "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?cs=srgb&dl=pexels-negativespace-97080.jpg&fm=jpg",
    description:
      "Data drives smarter decisions. With BildUp's analytics and audience insights, you'll understand customer behavior and market trends, track performance, and identify opportunities for growth. We turn numbers into strategies, giving your business the competitive edge it needs.",
    keywords: "marketing analytics services, audience insights, data-driven marketing strategy"
  },
  {
    title: "ONLINE REPUTATION MANAGEMENT",
    image:
      "https://images.pexels.com/photos/11894045/pexels-photo-11894045.jpeg?cs=srgb&dl=pexels-towfiqu-barbhuiya-3440682-11894045.jpg&fm=jpg",
    description:
      "Data drives smarter decisions. With BildUp's analytics and audience insights, you'll understand customer behavior and market trends, track performance, and identify opportunities for growth. We turn numbers into strategies, giving your business the competitive edge it needs.",
    keywords: "marketing analytics services, audience insights, data-driven marketing strategy"
  },
  {
    title: "PERSONAL BRANDING & MANAGEMENT",
    image:
      "https://images.pexels.com/photos/13375849/pexels-photo-13375849.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13375849.jpg&fm=jpg",
    description: "Data drives smarter decisions. With BildUp's analytics and audience insights, you'll understand customer behavior and market trends, track performance, and identify opportunities for growth. We turn numbers into strategies, giving your business the competitive edge it needs.",
    keywords: "marketing analytics services, audience insights, data-driven marketing strategy"
  },
  {
    title: "BRAND DEVELOPMENT & STRATEGY",
    image:
      "https://plus.unsplash.com/premium_photo-1707155465527-c5a2935b21cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJsYWNrJTIwQlJBTkQlMjBERVZFTE9QTUVOVCUyMCUyNiUyMFNUUkFURUdZfGVufDB8fDB8fHww",
    description:
      "Data drives smarter decisions. With BildUp's analytics and audience insights, you'll understand customer behavior and market trends, track performance, and identify opportunities for growth. We turn numbers into strategies, giving your business the competitive edge it needs.",
    keywords: "marketing analytics services, audience insights, data-driven marketing strategy"
  },
  {
    title: "MARKETING & CONTENT STRATEGY",
    image:
      "https://images.pexels.com/photos/7710055/pexels-photo-7710055.jpeg?cs=srgb&dl=pexels-a-darmel-7710055.jpg&fm=jpg",
    description:
      "Smart strategy drives successful campaigns. We design tailored marketing and content strategies that align with your business goals. From content planning to full- funnel marketing, we integrate audience research, storytelling, and distribution planning, to ensure that your brand speaks the right message to the right audience at the right time thereby increasing engagement and drive growth.",
    keywords: "marketing strategy agency, content strategy services, content planning"
  },
  {
    title: "UGC & INFLUENCER MARKETING MANAGEMENT",
    image:
      "https://images.pexels.com/photos/6954135/pexels-photo-6954135.jpeg?cs=srgb&dl=pexels-george-milton-6954135.jpg&fm=jpg",
    description:
      "Smart strategy drives successful campaigns. We design tailored marketing and content strategies that align with your business goals. From content planning to full- funnel marketing, we integrate audience research, storytelling, and distribution planning, to ensure that your brand speaks the right message to the right audience at the right time thereby increasing engagement and drive growth.",
    keywords: "marketing strategy agency, content strategy services, content planning"
  },
  {
    title: "SEARCH ENGINE OPTIMIZATION (SEO)",
    image:
      "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?cs=srgb&dl=pexels-caio-67112.jpg&fm=jpg",
    description:
      "Get found online with BildUp's SEO services. Our SEO services ensure your business ranks higher on search engines. We focus on on-page optimization, keyword research, technical SEO, and content improvements to increase website traffic and make your brand more discoverable online.",
    keywords: "SEO services, search engine optimization agency, local SEO optimization, SEO content writing"
  },
  {
    title: "EXPERIENCE IDEATION & DESIGN",
    image:
      "https://images.pexels.com/photos/6648439/pexels-photo-6648439.jpeg?cs=srgb&dl=pexels-cottonbro-6648439.jpg&fm=jpg",
    description:
      "Get found online with BildUp's SEO services. Our SEO services ensure your business ranks higher on search engines. We focus on on-page optimization, keyword research, technical SEO, and content improvements to increase website traffic and make your brand more discoverable online.",
    keywords: "SEO services, search engine optimization agency, local SEO optimization, SEO content writing"
  },
  {
    title: "BRAND NARRATIVE & STORYTELLING",
    image:
      "https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?cs=srgb&dl=pexels-divinetechygirl-1181311.jpg&fm=jpg",
    description:
      "Get found online with BildUp's SEO services. Our SEO services ensure your business rings higher on search engines. We focus on on-page optimization, keyword research, technical SEO, and content improvements to increase website traffic and make your brand more discoverable online.",
    keywords: "SEO services, search engine optimization agency, local SEO optimization, SEO content writing"
  },
];

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="services" className="relative min-h-screen bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Unique geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(254, 179, 235, 0.03) 100px,
            rgba(254, 179, 235, 0.03) 200px
          )`
        }}></div>
        
        {/* Dots pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(254, 179, 235, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 opacity-20" style={{
          background: 'radial-gradient(circle at top left, #feb3eb 0%, transparent 70%)'
        }}></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-20" style={{
          background: 'radial-gradient(circle at bottom right, #feb3eb 0%, transparent 70%)'
        }}></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 rotate-45 opacity-10 animate-spin" style={{ 
          borderColor: '#feb3eb',
          animationDuration: '20s'
        }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 border-2 rounded-full opacity-10 animate-pulse" style={{ 
          borderColor: '#feb3eb'
        }}></div>
        
        {/* Vertical accent lines */}
        <div className="absolute top-0 left-1/4 w-px h-full opacity-10" style={{ backgroundColor: '#feb3eb' }}></div>
        <div className="absolute top-0 right-1/3 w-px h-full opacity-10" style={{ backgroundColor: '#feb3eb' }}></div>
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
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight" style={{ color: '#feb3eb' }}>
            Our Services
          </h2>
          <div className="w-32 h-1.5 mx-auto rounded-full mb-6 shadow-lg" style={{ 
            backgroundColor: '#feb3eb',
            boxShadow: '0 0 20px #feb3eb'
          }}></div>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Comprehensive digital marketing solutions tailored to elevate your brand and drive measurable results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full">
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-50 transition duration-500 blur-xl" style={{ backgroundColor: '#feb3eb' }}></div>
                
                <div className="relative h-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:border-4 group-hover:scale-[1.02]" style={{ 
                  borderColor: '#feb3eb',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                }}>
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    
                    {/* Pink overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundColor: '#feb3eb' }}></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300" style={{ color: '#feb3eb' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-100 text-sm leading-relaxed mb-4">
                      {expandedCard === index 
                        ? service.description 
                        : `${service.description.substring(0, 100)}...`
                      }
                    </p>

                    {/* Keywords Section */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4" style={{ color: '#feb3eb' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                          Key Focus
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.keywords.split(',').map((keyword, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105"
                            style={{ 
                              backgroundColor: 'rgba(254, 179, 235, 0.15)',
                              borderColor: '#feb3eb',
                              color: '#feb3eb'
                            }}
                          >
                            {keyword.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Read More Button */}
                    <button
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      className="text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:gap-3"
                      style={{ color: '#feb3eb' }}
                    >
                      {expandedCard === index ? 'Show Less' : 'Read More'}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;