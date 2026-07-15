import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import Button from "../Components/Button";
import BackgroundBlobs from "../Components/BackgroundBlobs";
import TechStack from "../Components/TechStack";

const stats = [
  { value: "8+", label: "Projects Built" },
  { value: "5+", label: "AI Solutions" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Passion Driven" },
];

const roles = [
  "Software Developer",
  "Generative AI Engineer",
  "Automation Engineer",
  "Problem Solver",
  "Creative Thinker",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/EchannyE", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/echannyidagu", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/share/1C9vDUJ5qP/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/echannyonda", label: "Instagram" },
];

const Home = () => {
  return (
    <>
      <main className="relative min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-white transition-colors duration-300">
        <BackgroundBlobs />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10 relative w-full">

          {/* Left — Text Content */}
          <motion.header
            className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Available for hire badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/50 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium w-fit"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              Available for hire
            </motion.div>

            {/* Name */}
            <div className="flex flex-col gap-1">
              <span className="text-lg text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                Hello, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 leading-tight">
                Echanny Idagu
              </h1>
            </div>

            {/* Typewriter role */}
            <div className="flex items-center gap-3 min-h-[40px]">
              <span className="w-8 h-0.5 bg-pink-500 rounded-full flex-shrink-0" aria-hidden="true" />
              {/* The animation repeats forever and re-announces on every change,
                  which is disruptive for screen readers — hide it from the
                  accessibility tree and provide a single static equivalent instead. */}
              <TypeAnimation
                aria-hidden="true"
                className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200"
                sequence={roles.flatMap((role) => [role, 1800])}
                speed={55}
                repeat={Infinity}
              />
              <span className="sr-only">{roles.join(", ")}</span>
            </div>

            {/* Structured Paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-lg">
              I'm passionate about turning ideas into powerful digital solutions.
              I specialize in building modern, scalable, and user-friendly applications,
              blending clean code with creativity to deliver real impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button as={Link} to="/projects" variant="primary" size="lg" className="shadow-md">
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button as={Link} to="/contact" variant="outline" size="lg" className="shadow-md">
                  Get In Touch
                </Button>
              </motion.div>
            </div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-3 pt-2 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-pink-500 hover:text-pink-500 dark:hover:text-pink-400 dark:hover:border-pink-400 shadow-sm transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.header>

          {/* Right — Profile Image */}
          <motion.div
            className="md:w-1/2 w-full flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-pink-500 to-pink-300 dark:from-pink-600 dark:to-purple-900 opacity-25 blur-2xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/img/1.png"
                  alt="Portrait of Echanny Idagu"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Stats Strip */}
      <section className="bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900 py-10 px-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 tracking-tight">
                {value}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mt-1.5 font-medium uppercase tracking-wider">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStack />
    </>
  );
};

export default Home;