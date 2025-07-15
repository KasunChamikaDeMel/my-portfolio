import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, ArrowUpIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Side Info */}
          <div className="mb-8 md:mb-0" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-2">
              Kasun Chamika{' '}
              <span className="text-blue-400 hover:text-blue-300 transition-colors">
                De Mel
              </span>
            </h2>
            <p className="text-gray-400">
              Creating innovative digital solutions with precision and passion.
            </p>
          </div>

          {/* Right Side Social + Scroll */}
          <div className="flex flex-col items-center md:items-end" data-aos="fade-left">
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/KasunChamikaDeMel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110">
                <GithubIcon size={20} className="transform transition-transform hover:rotate-12" />
              </a>
              <a href="https://www.linkedin.com/in/kasun-chamika-11a88a281/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110">
                <LinkedinIcon size={20} className="transform transition-transform hover:rotate-12" />
              </a>
              <a href="https://www.facebook.com/chamika.kasundemel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110">
                <FacebookIcon size={20} className="transform transition-transform hover:rotate-12" />
              </a>
              <a href="https://www.instagram.com/ka_su_n.99/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110">
                <InstagramIcon size={20} className="transform transition-transform hover:rotate-12" />
              </a>
            </div>

            {/* Back to Top Button */}
            <button onClick={scrollToTop} className="flex items-center text-gray-400 hover:text-blue-400 transition-all group">
              <ArrowUpIcon size={16} className="mr-2 transform group-hover:-translate-y-1 transition-transform" />
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 hover:text-gray-400 transition-colors">
            &copy; {new Date().getFullYear()} Kasun Chamika. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-400 after:transition-all">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-400 after:transition-all">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
