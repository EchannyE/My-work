import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ---- Dark mode hook ----
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

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
];

// ---- Desktop nav link with animated active underline ----
const NavLinkItem = ({ to, name, closeMenu }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={closeMenu}
      aria-current={isActive ? 'page' : undefined}
      className="relative py-1 text-sm font-medium tracking-wide text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
    >
      <span className={isActive ? 'text-white' : ''}>{name}</span>
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute left-0 -bottom-1 h-[2px] w-full bg-pink-400"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};

// ---- Mobile nav link (no underline, bigger tap target) ----
const MobileNavLinkItem = ({ to, name, closeMenu }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={closeMenu}
      aria-current={isActive ? 'page' : undefined}
      className={`w-full max-w-xs rounded-lg px-4 py-3 text-center text-base font-medium transition-colors duration-150 ${
        isActive ? 'bg-pink-500/15 text-pink-300' : 'text-white/85 hover:bg-white/5 hover:text-white'
      }`}
    >
      {name}
    </Link>
  );
};

const ThemeToggle = ({ theme, toggleTheme, className = '' }) => (
  <button
    onClick={toggleTheme}
    className={`flex items-center justify-center rounded-full p-2 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${className}`}
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
  </button>
);

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Track scroll to switch between a translucent and a solid/elevated bar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on Escape, and lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen, closeMenu]);

  // Close the mobile menu automatically if the viewport grows past the lg breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMenu]);

  const menuVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: '0%', opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 28 } },
    exit: { y: '-100%', opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? 'border-pink-500/40 bg-black/70 backdrop-blur-md shadow-lg shadow-black/20'
          : 'border-pink-500/20 bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex-shrink-0" aria-label="Go to homepage">
          <span className="rounded-lg border-2 border-pink-400 px-2.5 py-1 font-mono text-xl font-bold text-pink-400 transition-colors duration-200 hover:bg-pink-400 hover:text-black">
            EEI
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLinkItem key={link.name} to={link.path} name={link.name} closeMenu={closeMenu} />
          ))}

          <Link
            to="/contact"
            className="rounded-lg bg-pink-400 px-4 py-1.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-pink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Contact
          </Link>

          <div className="ml-1 h-6 w-px bg-white/15" aria-hidden="true" />

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className="z-20 rounded-full p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute top-full left-0 flex w-full flex-col items-center gap-2 border-t border-white/10 bg-black/95 py-6 shadow-xl shadow-black/40 backdrop-blur-md lg:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => (
              <MobileNavLinkItem key={link.name} to={link.path} name={link.name} closeMenu={closeMenu} />
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 w-full max-w-xs rounded-lg bg-pink-400 px-4 py-3 text-center text-base font-semibold text-black transition-colors duration-150 hover:bg-pink-300"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;