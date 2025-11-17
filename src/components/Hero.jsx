import { motion } from "framer-motion";
import heroImage from "../assets/images/hero-image.jpg";

const Hero = () => {
  const titleWords = "BildUp- from Vision to Viral.".split(" ");

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 sm:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover object-[center_20%]"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60"></div>

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(254,179,235,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(254,179,235,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(254,179,235,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-30 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3 last:mr-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              style={{
                color: ["BildUp-", "Vision", "Viral."].includes(word) 
                  ? "#feb3eb" 
                  : "white",
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Your Brand's lasting solution to every{" "}
          <span className="text-[#feb3eb] font-semibold">
            Digital Marketing
          </span>{" "}
          need.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;