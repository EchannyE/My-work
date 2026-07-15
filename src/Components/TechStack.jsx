import { motion, useReducedMotion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress,
  SiJavascript, SiGithub, SiGit, SiVercel, SiPostman, SiFramer,
} from 'react-icons/si';
import { Bot, Sparkles } from 'lucide-react';

// `color: null` marks the monochrome brand marks (GitHub, Vercel) that need
// to flip between black/white with the theme instead of using a fixed hex —
// a fixed '#ffffff' made them invisible against the light-mode white card.
const techs = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiExpress, name: 'Express', color: '#888888' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiGithub, name: 'GitHub', color: null },
  { icon: SiVercel, name: 'Vercel', color: null },
  { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
  { icon: SiFramer, name: 'Framer Motion', color: '#0055FF' },
  { icon: Bot, name: 'n8n', color: '#EA4B71' },
  { icon: Sparkles, name: 'Gemini AI', color: '#8B5CF6' },
];

const TechItem = ({ icon: Icon, name, color }) => (
  <div className="mx-6 flex flex-shrink-0 flex-col items-center gap-2 group">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-md transition-transform duration-200 group-hover:scale-110 dark:border-gray-700 dark:bg-gray-800">
      <Icon
        size={28}
        style={color ? { color } : undefined}
        className={color ? undefined : 'text-gray-900 dark:text-white'}
      />
    </div>
    <span className="whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400">{name}</span>
  </div>
);

const TechStack = () => {
  const prefersReducedMotion = useReducedMotion();
  const doubled = [...techs, ...techs];

  return (
    <section className="overflow-hidden border-y border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900">
      <motion.h3
        className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Tech Stack & Tools
      </motion.h3>

      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex items-start"
          style={{ width: 'max-content' }}
          aria-hidden="true"
          animate={prefersReducedMotion ? undefined : { x: ['0%', '-50%'] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 28, repeat: Infinity, ease: 'linear' }
          }
        >
          {doubled.map((tech, i) => (
            <TechItem key={`${tech.name}-${i}`} {...tech} />
          ))}
        </motion.div>
      </div>

      {/* Non-duplicated, non-animated equivalent for screen readers */}
      <ul className="sr-only">
        {techs.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;