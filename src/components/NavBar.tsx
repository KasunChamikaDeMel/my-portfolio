import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {name: 'Home', href: '#home'}, 
    {name: 'About', href: '#about'},
    {name: 'Skills', href: '#skills'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'}
  ];

  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600 transition-all hover:scale-105">
          Kasun Chamika<span className="text-gray-900"> De Mel</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => <a key={link.name} href={link.href} className="font-medium text-gray-800 hover:text-blue-600 transition-all hover:-translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all" style={{
          transitionDelay: `${index * 50}ms`
        }}>
              {link.name}
            </a>)}
        </nav>
        <button className="md:hidden focus:outline-none transition-transform active:scale-90" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} className="text-gray-900 transition-transform rotate-90" /> : <MenuIcon size={24} className="text-gray-900 transition-transform hover:rotate-12" />}
        </button>
      </div>


      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="container mx-auto px-6 flex flex-col space-y-4 py-4">
          {navLinks.map((link, index) => <a key={link.name} href={link.href} className="font-medium py-2 text-gray-800 hover:text-blue-600 transition-all hover:translate-x-2" onClick={() => setIsMenuOpen(false)} style={{
          transitionDelay: `${index * 50}ms`
        }}>
              {link.name}
            </a>)}
        </div>
      </div>
    </header>;
};

export default NavBar;