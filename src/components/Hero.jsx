import heroImage from "../assets/images/hero-image.jpg";

const Hero = () => {
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
      
      {/* Black Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70"></div>
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      
      {/* Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
          <span className="inline-block animate-fadeIn drop-shadow-2xl">
            <span style={{ color: '#feb3eb' }}>BildUp</span>, from <span style={{ color: '#feb3eb' }}>Vision</span> to <span style={{ color: '#feb3eb' }}>Viral</span>.
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Your Brand's lasting solution to every Digital Marketing need.
        </p>
        
       
        
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl z-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl z-20"></div>
    </section>
  );
};

export default Hero;