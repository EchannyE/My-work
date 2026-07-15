import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1C9vDUJ5qP/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/echannyonda?igsh=MTcwdmE3ZnB2cHN5dA==",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "http://www.linkedin.com/in/echannyidagu",
      label: "LinkedIn",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-gray-900 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        
        {/* Copyright Panel */}
        <p className="text-sm order-3 md:order-1 text-gray-400 dark:text-gray-500">
          &copy; {currentYear} Echanny Idagu. All rights reserved.
        </p>

        {/* Center Links Layout */}
        <nav className="order-1 md:order-2">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Options + Action Group */}
        <div className="flex items-center gap-6 order-2 md:order-3">
          <ul className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 dark:text-gray-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 block p-1"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>

          {/* Back to Top Toggle */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-600 to-pink-400 text-white hover:from-pink-700 hover:to-pink-500 shadow-md shadow-pink-200 dark:shadow-pink-900/10 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;