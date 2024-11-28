import React from 'react';
import { motion } from 'framer-motion';
import { Music, Heart, Mic2, PenTool } from 'lucide-react';

import DSC9018 from '../resources/DSC_9018_edited.jpg';
import DSC9032 from '../resources/DSC_9032_edited.jpg';

interface AboutProps {
  currentLang: 'en' | 'it';
}

const content = {
  en: {
    title: 'About Me',
    subtitle: 'A journey through music and emotions',
    story: {
      title: 'My Story',
      content: "My name is Rosanna, I'm a singer-songwriter from Italy. I've always been very shy and introverted, since I was a child. This part of me led me to writing songs in English. This language gives me the freedom to express every emotion authentically, to find the right words to process feelings when I'm at my most vulnerable.",
    },
    passion: {
      title: 'My Passion',
      content:
        'Songs are like movies to me: each song is a story that I write, a specific moment in my life of which I can choose the beginning and evolution of it all.',
    },
    journey: {
      title: 'Between Fears and Hopes',
      content:
        "In each of my songs, you can find my fears, hopes and everything I'm going through to find my place in this world.",
    },
    invitation: {
      title: 'Join Me',
      content:
        'If you need to take a break and isolate yourself from the world, you should definitely stick around and listen to some things I wrote. Hope to see you here often.',
    },
  },
  it: {
    title: 'Chi Sono',
    subtitle: 'Un viaggio attraverso musica ed emozioni',
    story: {
      title: 'La Mia Storia',
      content:
        "Mi chiamo Rosanna, sono una cantautrice italiana. Fin da bambina, sono sempre stata molto timida e introversa. Questa parte di me mi ha portato a scrivere canzoni in inglese. E' una lingua che mi dà la libertà di esprimere ogni emozione in modo autentico, di trovare le parole giuste per elaborare i sentimenti quando mi sento più vulnerabile.",
    },
    passion: {
      title: 'La Mia Passione',
      content:
        "Le canzoni per me sono come dei film: ogni canzone è una storia che scrivo, un momento specifico della mia vita del quale posso scegliere l'inizio e l'evoluzione.", 
    },
    journey: {
      title: 'Tra Paure e Speranze',
      content:
        'In ognuna delle mie canzoni puoi trovare le mie paure, le mie speranze e tutto ciò a cui vado incontro per trovare il mio posto in questo mondo.',
    },
    invitation: {
      title: 'Unisciti a Me',
      content:
        'Se hai bisogno di prenderti una pausa e isolarti dal mondo, dovresti assolutamente restare nei paraggi e ascoltare alcune delle cose che ho scritto. Spero di vederti qui spesso.',
    },
  },
};

const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = content[currentLang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-anthracite via-gray-900 to-black text-white font-serif">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display title-glow text-gold mb-6">{t.title}</h1>
          <p className="text-xl max-w-2xl mx-auto italic">{t.subtitle}</p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <div className="flex items-start gap-4">
            <PenTool className="text-gold flex-shrink-0 mt-1" size={30} />
            <div>
              <h3 className="text-3xl title-glow text-gold mb-4">{t.story.title}</h3>
              <p className="leading-relaxed text-lg">{t.story.content}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Heart className="text-gold flex-shrink-0 mt-1" size={30} />
            <div>
              <h3 className="text-3xl title-glow text-gold mb-4">{t.passion.title}</h3>
              <p className="leading-relaxed text-lg">{t.passion.content}</p>
            </div>
          </div>

          {/* First Image */}
          <motion.div
            className="relative overflow-hidden rounded-xl border-2 border-gold shadow-lg group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src={DSC9018}
              alt="Performance"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Mobile-only content */}
          <div className="lg:hidden">
            <div className="flex items-start gap-4 mb-6">
              <Music className="text-gold flex-shrink-0 mt-1" size={30} />
              <div>
                <h3 className="text-3xl title-glow text-gold mb-4">{t.journey.title}</h3>
                <p className="leading-relaxed text-lg">{t.journey.content}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-2">
              <Mic2 className="text-gold flex-shrink-0 mt-1" size={30} />
              <div>
                <h3 className="text-3xl title-glow text-gold mb-4">{t.invitation.title}</h3>
                <p className="leading-relaxed text-lg">{t.invitation.content}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12 flex flex-col"
        >
          {/* Second Image */}
          <motion.div
            className="hidden lg:block relative overflow-hidden rounded-xl border-2 border-gold shadow-lg group lg:mb-12 lg:order-none order-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src={DSC9032}
              alt="Studio"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Desktop-only content */}
          <div className="hidden lg:block mt-24 space-y-12">
            <div className="flex items-start gap-4">
              <Music className="text-gold flex-shrink-0 mt-1" size={30} />
              <div>
                <h3 className="text-3xl title-glow text-gold mb-4">{t.journey.title}</h3>
                <p className="leading-relaxed text-lg">{t.journey.content}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mic2 className="text-gold flex-shrink-0 mt-1" size={30} />
              <div>
                <h3 className="text-3xl title-glow text-gold mb-4">{t.invitation.title}</h3>
                <p className="leading-relaxed text-lg">{t.invitation.content}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Second Image for Mobile */}
      <div className="lg:hidden px-6 pb-16 -mt-20">
        <motion.div
          className="relative overflow-hidden rounded-xl border-2 border-gold shadow-lg group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={DSC9032}
            alt="Studio"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
