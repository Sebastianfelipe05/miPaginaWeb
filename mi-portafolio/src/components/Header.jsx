import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-primary-dark text-white fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/imgs/logo.jpg" alt="SebaskiTek-X Logo" className="h-12 w-12 rounded-lg" />
            <span className="text-2xl font-bold">SebaskiTek-X</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><button onClick={() => scrollToSection('home')} className="hover:text-primary-light transition">Inicio</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-primary-light transition">Sobre Mí</button></li>
            <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-light transition">Servicios</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="hover:text-primary-light transition">Proyectos</button></li>
            <li><button onClick={() => scrollToSection('blog')} className="hover:text-primary-light transition">Blog</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary-light transition">Contacto</button></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li><button onClick={() => scrollToSection('home')} className="block hover:text-primary-light">Inicio</button></li>
            <li><button onClick={() => scrollToSection('about')} className="block hover:text-primary-light">Sobre Mí</button></li>
            <li><button onClick={() => scrollToSection('services')} className="block hover:text-primary-light">Servicios</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="block hover:text-primary-light">Proyectos</button></li>
            <li><button onClick={() => scrollToSection('blog')} className="block hover:text-primary-light">Blog</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="block hover:text-primary-light">Contacto</button></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
