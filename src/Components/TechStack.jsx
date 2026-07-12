import { motion } from 'framer-motion';
import {
    SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress,
    SiJavascript, SiGithub, SiGit, SiVercel, SiPostman, SiFramer,
} from 'react-icons/si';
import { Bot, Sparkles } from 'lucide-react';

const techs = [
    { icon: SiReact,       name: 'React',         color: '#61DAFB' },
    { icon: SiJavascript,  name: 'JavaScript',    color: '#F7DF1E' },
    { icon: SiNodedotjs,   name: 'Node.js',       color: '#339933' },
    { icon: SiExpress,     name: 'Express',       color: '#888888' },
    { icon: SiMongodb,     name: 'MongoDB',       color: '#47A248' },
    { icon: SiTailwindcss, name: 'Tailwind CSS',  color: '#06B6D4' },
    { icon: SiGit,         name: 'Git',           color: '#F05032' },
    { icon: SiGithub,      name: 'GitHub',        color: '#ffffff' },
    { icon: SiVercel,      name: 'Vercel',        color: '#ffffff' },
    { icon: SiPostman,     name: 'Postman',       color: '#FF6C37' },
    { icon: SiFramer,      name: 'Framer Motion', color: '#0055FF' },
    { icon: Bot,           name: 'n8n',           color: '#EA4B71', isLucide: true },
    { icon: Sparkles,      name: 'Gemini AI',     color: '#8B5CF6', isLucide: true },
];

const TechItem = ({ icon: Icon, name, color, isLucide }) => (
    <div className="flex flex-col items-center gap-2 mx-6 flex-shrink-0 group">
        <div
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-md group-hover:scale-110 transition-transform duration-200 border border-gray-100 dark:border-gray-700"
        >
            <Icon
                size={28}
                style={{ color }}
                className={isLucide ? '' : undefined}
            />
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{name}</span>
    </div>
);

const TechStack = () => {
    const doubled = [...techs, ...techs];

    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-900 overflow-hidden border-y border-gray-200 dark:border-gray-800">
            <motion.h3
                className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Tech Stack & Tools
            </motion.h3>

            <div className="relative">
                <div
                    className="flex items-start animate-marquee"
                    style={{ width: 'max-content' }}
                >
                    {doubled.map((tech, i) => (
                        <TechItem key={i} {...tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
