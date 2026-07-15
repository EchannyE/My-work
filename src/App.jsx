import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollProgress from './Components/ScrollProgress';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import NotFound from './Pages/NotFound';
import './index.css';

const pageVariants = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit:    { opacity: 0, y: -18, transition: { duration: 0.25, ease: 'easeIn' } },
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Routes location={location}>
                    <Route path="/"         element={<Home />} />
                    <Route path="/about"    element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact"  element={<Contact />} />
                    <Route path="*"         element={<NotFound />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
};

function App() {
    return (
        <Router>
            <ScrollProgress />
            <Navbar />
            <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
                <AnimatedRoutes />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
