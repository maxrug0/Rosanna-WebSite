import React from 'react';

interface FooterProps {
  currentLang: 'en' | 'it';
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const content = {
    en: {
      rights: 'All rights reserved.'
    },
    it: {
      rights: 'Tutti i diritti riservati.'
    }
  };

  const t = content[currentLang];
  
  return (
    <footer className="bg-black/50 backdrop-blur-sm py-4">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} Rosanna. {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
