import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  // Smooth out the raw scroll value, unless the user prefers reduced motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 1000 : 300,
    damping: prefersReducedMotion ? 100 : 40,
    restDelta: 0.001,
  });

  // Mirror progress into plain state so screen readers get an accurate,
  // non-animated percentage rather than a raw motion value
  const [progressPercent, setProgressPercent] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setProgressPercent(Math.round(v * 100));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={progressPercent}
      aria-valuemin={0}
      aria-valuemax={100}
      className="pointer-events-none fixed left-0 right-0 top-0 z-[200] h-1 origin-left bg-gradient-to-r from-pink-600 via-pink-400 to-pink-300"
      style={{ scaleX: smoothProgress }}
    />
  );
};

export default ScrollProgress;