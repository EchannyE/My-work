import React from 'react';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Code2, Database, Smartphone, GitBranch, Server, Bot, Sparkles, KeyRound } from 'lucide-react';

const highlights = [
  { icon: Code2,      title: 'Frontend Development',  description: 'Expert in React, JavaScript, and modern CSS frameworks' },
  { icon: Database,   title: 'Backend Development',   description: 'Proficient in Node.js, Express, and MongoDB' },
  { icon: Bot,        title: 'AI Automation',          description: 'Building intelligent workflows with n8n, LangChain, and AI-powered pipelines' },
  { icon: Sparkles,   title: 'Generative AI',          description: 'Integrating LLMs like Google Gemini and OpenAI to create smart, AI-driven applications' },
  { icon: Smartphone, title: 'Responsive Design',      description: 'Mobile-first approach for all screen sizes' },
  { icon: GitBranch,  title: 'Git & GitHub',           description: 'Version control and collaboration using Git & GitHub' },
  { icon: KeyRound,   title: 'JWT Authentication',     description: 'Implementing secure authentication with JSON Web Tokens' },
  { icon: Server,     title: 'RESTful APIs',           description: 'Designing and building scalable RESTful APIs' },
];

const SkillCard = ({ icon: Icon, title, description, index }) => (
  <motion.li
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    viewport={{ once: true }}
    className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-start list-none"
  >
    <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/40 flex items-center justify-center mb-3.5">
      <Icon className="h-5 w-5 text-pink-600 dark:text-pink-400" />
    </div>
    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{title}</h4>
    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
  </motion.li>
);

const About = () => {
  return (
    <section 
      className="dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-300"
      role="region" 
      aria-label="About Me Profile"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About <span className="text-pink-600 dark:text-pink-400">Me</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-pink-500 rounded-full mt-3"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* Left Column — Profile Info */}
          <motion.div
            className="lg:w-1/2 w-full flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Photo + Name Card */}
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-pink-500 dark:border-pink-400 shadow-md flex-shrink-0">
                <img
                  src="/img/1.png"
                  alt="Echanny Idagu profile layout picture"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Echanny Idagu</h3>
                <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm mt-0.5">
                  Software Developer & Generative AI Engineer
                </p>
              </div>
            </div>

            {/* Bio Content Block */}
            <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                I am a dedicated <span className="font-bold text-pink-600 dark:text-pink-400">Software Developer</span> with
                a strong passion for creating applications that make life easier, smarter, and more connected.
                My journey in tech started with curiosity about how software powers everyday solutions —
                and has grown into a career focused on designing and building applications that are both functional and meaningful.
              </p>
              <p>
                I am a <span className="font-bold text-pink-600 dark:text-pink-400">Problem Solver</span> who
                thrives on challenges and enjoys turning complex problems into simple, beautiful, and intuitive designs.
                I leverage <span className="font-semibold text-gray-800 dark:text-gray-200">AI Automation</span> and{" "}
                <span className="font-semibold text-gray-800 dark:text-gray-200">Generative AI</span> to build
                next-generation solutions — from intelligent workflows to LLM-powered applications —
                staying at the cutting edge of modern software development.
              </p>
            </div>

            {/* Action Group Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/Echanny_Emmanuel.pdf"
                download="Echanny_Emmanuel.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button title="Download CV" variant="primary" size="lg" className="shadow-md" />
              </motion.a>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact">
                  <Button title="Hire Me" variant="outline" size="lg" className="shadow-md" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column — Core Skills Stack */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0">
              {highlights.map((item, index) => (
                <SkillCard key={item.title} {...item} index={index} />
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;