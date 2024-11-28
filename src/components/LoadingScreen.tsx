import React from 'react';
import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-anthracite z-50 flex items-center justify-center">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-t-gold border-r-gold border-b-gold/30 border-l-gold/30" />
        </motion.div>
        <Music className="w-7 h-7 text-gold" />
      </div>
    </div>
  );
};

export default LoadingScreen;
