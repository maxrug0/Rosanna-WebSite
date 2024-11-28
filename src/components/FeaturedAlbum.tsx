import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface FeaturedAlbumProps {
  title: string;
  coverUrl: string;
  spotifyUrl: string;
  releaseDate: string;
}

const FeaturedAlbum: React.FC<FeaturedAlbumProps> = ({
  title,
  coverUrl,
  spotifyUrl,
  releaseDate,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-4"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-display mb-4 text-primary">Latest Release</h2>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{releaseDate}</p>
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn btn-primary"
          >
            Listen on Spotify
            <ExternalLink size={16} />
          </a>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full md:w-96 aspect-square rounded-lg overflow-hidden shadow-xl"
        >
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ExternalLink className="text-white w-8 h-8" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedAlbum;