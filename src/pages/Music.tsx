import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ExternalLink } from 'lucide-react';

const Music = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-display mb-6">My Music</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore my latest releases, performances, and musical journey through classical Italian opera.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="section-container">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Latest Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={release.image}
                alt={release.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.date}</p>
                <div className="flex justify-between items-center">
                  <button className="btn btn-primary flex items-center gap-2">
                    <Play size={16} /> Listen Now
                  </button>
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const releases = [
  {
    title: "Puccini: La Bohème Highlights",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    spotifyUrl: "https://open.spotify.com"
  },
  {
    title: "Verdi: Arias & Duets",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    spotifyUrl: "https://open.spotify.com"
  },
  {
    title: "Mozart: Le Nozze di Figaro",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    spotifyUrl: "https://open.spotify.com"
  }
];

export default Music;