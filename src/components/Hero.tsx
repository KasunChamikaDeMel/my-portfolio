import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import ParticleBackground from './animations/ParticleBackground';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          
          {/* Left Text Block */}
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900" data-aos="fade-up">
              Hi, I'm{' '}
              <span className="text-blue-600 inline-block hover:scale-105 transition-transform">
                Kasun Chamika De Mel
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6" data-aos="fade-up" data-aos-delay="100">
              Software Engineer | Web Developer | UI/UX Designer
            </h2>

            <p className="text-lg text-gray-700 mb-8" data-aos="fade-up" data-aos-delay="200">
              I craft responsive websites, develop robust backend systems, and design intuitive user interfaces.
              Let's turn your ideas into reality.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Contact
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-1"
              >
                View My Work
              </a>
            </div>
            
            <div className="mt-12 flex justify-center md:justify-start space-x-4" data-aos="fade-up" data-aos-delay="400">
              <a href="https://github.com/KasunChamikaDeMel" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-all hover:scale-110">
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kasun-chamika-11a88a281/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-all hover:scale-110">
                <LinkedinIcon size={24} />
              </a>
              <a href="https://www.facebook.com/chamika.kasundemel" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-all hover:scale-110">
                <FacebookIcon size={24} />
              </a>
              <a href="https://www.instagram.com/ka_su_n.99/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-all hover:scale-110">
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0" data-aos="fade-left">
            <div
              className="w-48 h-48 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 shadow-[inset_8px_8px_20px_rgba(0,0,0,0.1),0_8px_20px_rgba(0,0,0,0.3)] transform md:rotate-2 md:scale-105 transition-transform duration-500"
              style={{ perspective: '1000px' }}
            >
              <img
                src="/images/my pic.jpg"
                alt="Kasun Chamika - Logo"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
