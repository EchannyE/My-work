import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-pink-400 to-pink-300 origin-left z-[200] pointer-events-none"
            style={{ scaleX: scrollYProgress }}
        />
    );
};

export default ScrollProgress;
