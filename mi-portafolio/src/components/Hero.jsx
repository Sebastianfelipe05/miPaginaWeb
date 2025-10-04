const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Video de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/imgs/hola.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-medium/85 to-purple-900/80"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
              SebaskiTek-X
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-100">
              Transformando ideas en realidades digitales
            </p>
            <p className="text-2xl md:text-3xl mb-8 text-accent font-semibold">
              Plataformas rápidas, Experiencias seguras e Impulsando tu presencia digital
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-primary-dark px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-primary-dark transition shadow-lg transform hover:scale-105 hover:shadow-2xl"
            >
              Contáctame ahora
            </button>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-24 md:h-32">
          <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
