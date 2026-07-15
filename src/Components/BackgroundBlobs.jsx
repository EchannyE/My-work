import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const blobs = [
  {
    className: 'top-0 left-0 bg-gradient-to-br from-pink-400 to-pink-200 dark:from-pink-600 dark:to-purple-900',
    delay: 0,
  },
  {
    className: 'top-0 right-0 bg-gradient-to-br from-purple-400 to-pink-200 dark:from-purple-700 dark:to-pink-900',
    delay: 2,
  },
  {
    className: 'bottom-0 left-1/4 bg-gradient-to-br from-pink-300 to-purple-300 dark:from-pink-800 dark:to-purple-800',
    delay: 4,
  },
];

const BackgroundBlobs = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    // Purely decorative: hidden from screen readers and never intercepts clicks
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute h-64 w-64 rounded-full opacity-30 blur-xl mix-blend-multiply dark:opacity-20 dark:mix-blend-screen ${blob.className}`}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, 30, -20, 0],
                  y: [0, -30, 20, 0],
                  scale: [1, 1.1, 0.95, 1],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBlobs;