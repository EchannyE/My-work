import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Dark mode hook
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return [theme, toggleTheme];
};

// NavLink component
const NavLinkItem = ({ to, name, closeMenu }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={closeMenu}
      className={`hover:text-pink-400 transition duration-200 ${
        isActive ? 'text-pink-400 font-semibold' : 'text-white'
      }`}
    >
      {name}
    </Link>
  );
};

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    
  ];

  const menuVariants = {
    hidden: { y: '-100%' },
    visible: { y: '0%', transition: { type: 'spring', stiffness: 100, damping: 15 } },
    exit: { y: '-100%' },
  };

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 bg-black/30 backdrop-blur-md border-b border-pink-500`}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex-shrink-0" aria-label="Go to homepage">
          <div className="text-2xl border-2 border-pink-400 text-pink-400 rounded-lg px-2 py-1 transition duration-200 hover:bg-pink-400 hover:text-gray-900 font-bold">
            EEI
          </div>
        </Link>

      
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLinkItem key={link.name} to={link.path} name={link.name} closeMenu={closeMenu} />
          ))}

          <Link to="/contact">
          <button className='w-13 px-3 py-1 rounded-lg bg-gradient-to-r from-pink-500 to-pink-100 text-pink-900 hover:from-pink-600 hover:to-pink-400 focus:ring-pink-500' >Contact</button>
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 transition flex items-center justify-center"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleTheme}
            className="text-white p-2 rounded-full mr-2 hover:bg-gray-700 transition"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-white focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full p-2 z-20"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-6 shadow-lg border-t border-gray-700 lg:hidden gap-3 shadow-pink-500/50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => (
              <NavLinkItem key={link.name} to={link.path} name={link.name} closeMenu={closeMenu} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
