import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Facebook, Instagram } from 'lucide-react';

interface ContactProps {
  currentLang: 'en' | 'it';
}

const content = {
  en: {
    title: 'Contact',
    subtitle: 'Let\'s create something beautiful together',
    email: 'Email',
    location: 'Location',
    social: 'Connect with me',
  },
  it: {
    title: 'Contatti',
    subtitle: 'Creiamo qualcosa di bello insieme',
    email: 'Email',
    location: 'Località',
    social: 'I miei social',
  }
};

const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = content[currentLang];

  return (
    <div className="min-h-screen pt-16 bg-black">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display mb-6 text-gold">{t.title}</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/80">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="flex items-center space-x-6">
              <Mail className="text-gold" size={28} />
              <div>
                <h3 className="font-semibold text-gold mb-2 text-xl">{t.email}</h3>
                <p className="text-white/80 text-lg">contact@rosannacalisto.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <MapPin className="text-gold" size={28} />
              <div>
                <h3 className="font-semibold text-gold mb-2 text-xl">{t.location}</h3>
                <p className="text-white/80 text-lg">Amantea, Italy</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="font-semibold text-gold text-2xl mb-8">{t.social}</h3>
            <div className="flex space-x-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-gold transition-colors"
              >
                <Facebook size={32} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-gold transition-colors"
              >
                <Instagram size={32} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;