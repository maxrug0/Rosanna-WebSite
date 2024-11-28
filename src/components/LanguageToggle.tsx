import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: 'en' | 'it';
  onToggle: () => void;
  scrolled: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle, scrolled }) => {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300
        ${scrolled 
          ? 'border-gold/30 text-white hover:text-gold hover:border-gold' 
          : 'border-black/10 text-black hover:text-gold hover:border-gold'}`}
    >
      <Globe size={16} />
      <span>{currentLang.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;