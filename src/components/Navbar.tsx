import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import EmailPopover from './EmailPopover';
import LanguageToggle from './LanguageToggle';

interface NavbarProps {
  currentLang: 'en' | 'it';
  onToggleLanguage: () => void;
}

const navItems = {
  en: {
    home: 'Home',
    about: 'About me'
  },
  it: {
    home: 'Home',
    about: 'Chi Sono'
  }
};

const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const t = navItems[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/about') {
        setScrolled(window.scrollY > 0);
      } else {
        setScrolled(window.scrollY > window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'nav-top'}`}>
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-display text-2xl">
              Rosanna
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              {t.home}
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              {t.about}
            </Link>
            <div className="h-4 w-[1px] bg-current opacity-20" />
            <div className="flex items-center space-x-4">
              <EmailPopover 
                email="rosannacalisto3@gmail.com"
                label="Email"
                currentLang={currentLang}
              />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-current hover:text-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-current hover:text-gold transition-colors"
              >
                <FaTiktok size={16} />
              </a>
            </div>
            <div className="h-4 w-[1px] bg-current opacity-20" />
            <LanguageToggle currentLang={currentLang} onToggle={onToggleLanguage} scrolled={scrolled} />
          </div>

          {/* Mobile menu button and controls */}
          <div className="md:hidden flex items-center">
            <LanguageToggle currentLang={currentLang} onToggle={onToggleLanguage} scrolled={scrolled} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-6 h-6 flex flex-col justify-center items-center ml-4"
            >
              <div className={`w-6 h-0.5 absolute transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-anthracite'} ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'}`} />
              <div className={`w-6 h-0.5 absolute transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-anthracite'} ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${scrolled ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`}>
          <div className="px-4 py-6 space-y-8">
            <div className="flex flex-col items-start space-y-6">
              <Link
                to="/"
                className={`nav-link text-left ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t.home}
              </Link>
              <Link
                to="/about"
                className={`nav-link text-left ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t.about}
              </Link>
            </div>
            
            <div className="pt-4 border-t border-current/10">
              <div className="flex items-center space-x-6">
                <EmailPopover 
                  email="rosannacalisto3@gmail.com"
                  label="Email"
                  currentLang={currentLang}
                />
                <a
                  href="https://www.instagram.com/rosanna_calisto?igsh=Y2Z2M2RuNjFwdGZt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-current hover:text-gold transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://tiktok.com/@rosanna_calisto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-current hover:text-gold transition-colors"
                >
                  <FaTiktok size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
