import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "../assets/images/hero-image.jpg";

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 z-15 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[#feb3eb] to-[#feb3eb]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated gradient orb
const GradientOrb = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full z-5"
      animate={{
        background: [
          "radial-gradient(circle, rgba(254,179,235,0.15) 0%, transparent 70%)",
          "radial-gradient(circle, rgba(254,179,235,0.25) 0%, transparent 70%)",
          "radial-gradient(circle, rgba(254,179,235,0.15) 0%, transparent 70%)",
        ],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 1.2,
      },
    },
  };

  // Split text into words for individual animation
  const titleWords = "BildUp- from Vision to Viral.".split(" ");

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 sm:pt-24">
      {/* Background Image with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={heroImage} 
          alt="Hero" 
          className="w-full h-full object-cover object-[center_20%]"
        />
      </motion.div>
      

      <motion.div 
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: "linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />
      
      
      <motion.div 
        className="absolute inset-0 z-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(254,179,235,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(254,179,235,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(254,179,235,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(254,179,235,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Gradient Orb */}
      <GradientOrb />

      {/* Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-4 last:mr-0 drop-shadow-2xl"
              style={{
                color: word === "BildUp" || word === "Vision" || word === "Viral." ? '#feb3eb' : 'white',
                textShadow: word === "BildUp" || word === "Vision" || word === "Viral." 
                  ? '0 0 30px rgba(254,179,235,0.5), 0 0 60px rgba(254,179,235,0.3)'
                  : 'none',
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl lg:text-3xl text-white/95 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Your Brand's lasting solution to every{" "}
          <motion.span
            className="bg-gradient-to-r from-[#feb3eb] to-[#feb3eb] bg-clip-text text-transparent font-semibold"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            Digital Marketing
          </motion.span>{" "}
          need.
        </motion.p>
      </div>
      
      {/* Enhanced decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-[#feb3eb]/20 rounded-full blur-3xl z-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#feb3eb]/20 rounded-full blur-3xl z-20"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;