import React from "react";
import { motion } from "framer-motion";

// Import delle immagini
import DSC8985 from "../resources/DSC_8985_edited.jpg";
import DSC9007 from "../resources/DSC_9007_edited.jpg";
import DSC9012 from "../resources/DSC_9012_edited.jpg";
import DSC9035 from "../resources/DSC_9035_edited.jpg";

const photos = [
  {
    url: DSC9007,
    caption: "Elegance in Motion",
  },
  {
    url: DSC8985,
    caption: "Timeless Serenity",
  },
  {
    url: DSC9012,
    caption: "A Moment of Grace",
  },
  {
    url: DSC9035,
    caption: "Poetic Stillness",
  },
];

const PhotoCarousel = () => {
  return (
    <div className="bg-black py-16">
      <h2 className="text-4xl font-display title-glow text-gold text-center mb-12">
        Photo Gallery
      </h2>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-4 gap-8 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.url}
            className="relative overflow-hidden rounded-xl border-2 border-gold shadow-lg group"
            initial={{ opacity: 0, y: 50 }} // Partenza
            whileInView={{ opacity: 1, y: 0 }} // Quando entra in viewport
            viewport={{ amount: 0.3 }} // Si attiva ogni volta che il 30% è visibile
            transition={{ duration: 1.2, delay: index * 0.3 }} // Più lento e con ritardo
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Layer (Sfumatura) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Caption Text Removed */}
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex gap-4 overflow-x-scroll px-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.url}
            className="relative flex-none w-72 overflow-hidden rounded-xl border-2 border-gold shadow-lg group"
            initial={{ opacity: 0, y: 50 }} // Partenza
            whileInView={{ opacity: 1, y: 0 }} // Quando entra in viewport
            viewport={{ amount: 0.1 }} // Si attiva ogni volta che il 30% è visibile
            transition={{ duration: 1.2, delay: index * 0.1 }} // Più lento e con ritardo
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Layer (Sfumatura) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Caption Text Removed */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
