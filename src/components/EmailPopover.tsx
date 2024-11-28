import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EmailPopoverProps {
  email: string;
  label: string;
  className?: string;
  currentLang?: 'en' | 'it';
}

const content = {
  en: {
    copied: 'Copied to clipboard!'
  },
  it: {
    copied: 'Copiato negli appunti!'
  }
};

const EmailPopover: React.FC<EmailPopoverProps> = ({ 
  email, 
  label, 
  className = "",
  currentLang = 'en'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = content[currentLang];

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleClick}
        className="text-current hover:text-gold transition-colors flex items-center gap-2"
        aria-label={label}
      >
        <Mail size={18} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-gold/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm shadow-lg"
          >
            <p className="mb-1">{email}</p>
            <p className="text-xs text-white/80">{t.copied}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailPopover;
