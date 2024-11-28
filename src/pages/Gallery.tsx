import React from 'react';
import { motion } from 'framer-motion';
import PhotoCarousel from '../components/PhotoCarousel';

const Gallery = () => {
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
            <h1 className="text-5xl md:text-6xl font-display mb-6">Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto">
              A visual journey through performances, backstage moments, and memorable events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="bg-neutral-900">
        <PhotoCarousel />
      </section>
    </div>
  );
};

export default Gallery;