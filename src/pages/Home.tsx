import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import PhotoCarousel from '../components/PhotoCarousel';

import COVER from '../resources/rosanna_bg.jpg';
import COPERTINA from '../resources/Copertina_2.jpeg'

interface HomeProps {
  currentLang: 'en' | 'it';
}

const content = {
  en: {
    role: 'Singer-Songwriter',
    latestRelease: 'Latest Release',
    listen: 'Listen on Spotify',
    releaseDate: 'Available now',
    songTitle: 'Living in the Blue',
    description:
      'Dive into an enchanting world of serene melodies and poetic storytelling. A timeless piece to soothe your soul.',
  },
  it: {
    role: 'Cantautrice',
    latestRelease: 'Ultima Uscita',
    listen: 'Ascolta su Spotify',
    releaseDate: 'Disponibile adesso',
    songTitle: 'Living in the Blue',
    description:
      'Immergiti in un mondo incantevole di melodie serene e narrazioni poetiche. Un pezzo senza tempo per nutrire l’anima.',
  },
};

const Home: React.FC<HomeProps> = ({ currentLang }) => {
  const t = content[currentLang];

  return (
      <div className="bg-anthracite">
    {/* Hero Section */}
    <section className="h-screen relative overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${COVER})`,
        filter: 'brightness(0.85)', // Oscuriamo leggermente per risaltare il testo
      }}
    />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative h-full flex flex-col items-center justify-center text-center px-4"
    >
      {/* Titolo */}
      <h1 className="text-6xl md:text-8xl font-display mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
        Rosanna
      </h1>

      {/* Sottotitolo */}
      {/*<p className="text-xl md:text-2xl font-body italic mb-8 text-white/80">
        {t.role}
      </p>*/}

      {/* Pulsante Scroll */}
      <a
        href="#latest-release"
        className="group mt-10 flex flex-col items-center"
      >
        <ChevronDown
          size={40}
          className="text-white group-hover:text-gold transition-all duration-300 group-hover:scale-125"
        />
      </a>
    </motion.div>
  </section>

    {/* Latest Release Section */}
    <section
      id="latest-release"
      className="py-24 bg-gradient-to-b from-anthracite via-gray-900 to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl mb-16 title-glow text-gold font-display">
          {t.latestRelease}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Cover Sezione */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg overflow-hidden group cursor-pointer border-2 border-gold"
            onClick={() => window.open('https://open.spotify.com/track/3wKfcBDA50DbEizTWkdn5z?si=bHenTwX5T6-5eSKZgDCrVg', '_blank')}
          >
            <img
              src={COPERTINA}
              alt="Latest Release Cover"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          {/* Testo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left md:pl-8"
          >
            <h3 className="text-3xl font-display text-gold mb-4">
              {t.songTitle}
            </h3>
            <p className="text-white/80 text-lg font-serif mb-4">
              {t.releaseDate}
            </p>
            {/*<p className="text-lg text-white/90 leading-relaxed font-serif italic mb-6">
              {t.description}
            </p>*/}
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-gold text-black py-3 px-6 rounded-full font-semibold text-lg shadow-md shadow-gold/50 hover:shadow-lg hover:shadow-gold/70 flex items-center gap-2" // Aggiunto flex e gap
  onClick={() =>
    window.open(
      'https://open.spotify.com/track/3wKfcBDA50DbEizTWkdn5z?si=bHenTwX5T6-5eSKZgDCrVg',
      '_blank'
    )
  }
>
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="black" // Riempimento nero pieno
    className="w-5 h-5"
  >
    <path d="M5 3v18l15-9-15-9z" />
  </svg>
  {t.listen}
</motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>

    {/* Photo Carousel Section */}
    <section>
      <PhotoCarousel />
    </section>
  </div>

  );
};

export default Home;
