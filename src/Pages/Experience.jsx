import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, MapPin, Calendar } from 'lucide-react';

const experiences = [
    {
        role: 'Software Developer Intern',
        company: 'Codveda Technologies',
        location: 'Remote',
        period: 'May 2026 – Present',
        current: true,
        bullets: [
            'Developing full-stack web applications using React.js, Node.js, Express.js, and MongoDB.',
            'Building and integrating RESTful APIs with robust validation, error handling, and database management.',
            'Collaborating in agile teams through sprint planning, code reviews, and daily standups.',
            'Leveraging automation and Generative AI to streamline workflows and prototype new features.',
            'Maintaining code quality through documentation, Git-based version control, and deployment best practices.',
        ],
    },
    {
        role: 'Volunteer Software Developer / Automation Engineer',
        company: 'Sannex Tech',
        location: 'Remote',
        period: 'Previous',
        current: false,
        bullets: [
            'Contributed to backend API development, validation, and third-party service integrations.',
            'Diagnosed and resolved application issues through structured debugging and performance optimisation.',
            'Collaborated with developers using Git workflows, pull requests, and team-based development practices.',
            'Gained hands-on experience in backend architecture, server-side development, and database design within a production-oriented environment.',
        ],
    },
];

const certifications = [
    {
        title: 'Enyata × Interswitch Buildathon Hackathon Certification',
        detail: 'Recognised for project delivery and technical execution in a competitive, time-boxed innovation challenge.',
        color: 'from-pink-500 to-rose-400',
    },
    {
        title: 'Generative AI Certification',
        detail: 'Awarded on practical delivery of LLM integration, RAG systems, and agentic workflow automation projects.',
        color: 'from-violet-500 to-purple-400',
    },
    {
        title: 'MERN Stack Development Certification',
        detail: 'Full-stack credential covering MongoDB, Express.js, React.js, and Node.js.',
        color: 'from-emerald-500 to-teal-400',
    },
    {
        title: 'Backend Development Certification',
        detail: 'Server-side engineering covering APIs, authentication, database design, and deployment.',
        color: 'from-blue-500 to-cyan-400',
    },
    {
        title: 'Workflow Automation & AI Integration Training Certificate',
        detail: 'n8n pipeline design, Generative AI API integration, and automated workflow architecture.',
        color: 'from-amber-500 to-orange-400',
    },
];

const TimelineItem = ({ exp, index }) => (
    <motion.li
        className="relative pl-10 pb-12 last:pb-0 list-none"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
    >
        {/* Vertical line */}
        <div className="absolute left-3 top-3 bottom-0 w-px bg-gradient-to-b from-pink-500 to-pink-200 dark:to-pink-900" />

        {/* Dot */}
        <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center
            ${exp.current
                ? 'bg-pink-500 border-pink-500 shadow-lg shadow-pink-500/40'
                : 'bg-white dark:bg-gray-800 border-pink-400'}`}
        >
            {exp.current && (
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            )}
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                    <p className="text-pink-500 dark:text-pink-400 font-semibold mt-0.5">{exp.company}</p>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full
                        ${exp.current
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-300 dark:border-green-700'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}
                    >
                        {exp.current && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />}
                        <Calendar size={11} />
                        {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                        <MapPin size={11} />
                        {exp.location}
                    </span>
                </div>
            </div>

            <ul className="space-y-2 p-0">
                {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed list-none">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                        {b}
                    </li>
                ))}
            </ul>
        </div>
    </motion.li>
);

const CertCard = ({ cert, index }) => (
    <motion.li
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 list-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color}`} />
        <div className="p-5">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-md`}>
                <Award size={20} className="text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-2">{cert.title}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{cert.detail}</p>
        </div>
    </motion.li>
);

const Experience = () => {
    return (
        <section 
            className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-300"
            role="region"
            aria-label="Experience and Certifications"
        >
            <div className="max-w-4xl mx-auto">

                {/* Page Title Wrapper Layout */}
                <div className="flex flex-col items-center mb-4 text-center">
                    <motion.h2
                        className="text-4xl font-extrabold"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Experience & <span className="text-pink-500">Certifications</span>
                    </motion.h2>
                    <motion.div 
                        className="w-24 h-1 bg-pink-500 rounded-full mt-4"
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </div>
                
                <motion.p
                    className="text-center text-gray-500 dark:text-gray-400 mt-4 mb-16 max-w-xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    My professional journey and the credentials I've earned along the way.
                </motion.p>

                {/* Work Experience Timeline */}
                <div className="mb-20">
                    <motion.div
                        className="flex items-center gap-3 mb-10"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                            <Briefcase size={20} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Experience</h3>
                    </motion.div>

                    <ul className="relative p-0 m-0">
                        {experiences.map((exp, i) => (
                            <TimelineItem key={exp.role + i} exp={exp} index={i} />
                        ))}
                    </ul>
                </div>

                {/* Certifications Block Section */}
                <div>
                    <motion.div
                        className="flex items-center gap-3 mb-10"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                            <Award size={20} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                    </motion.div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-0 m-0">
                        {certifications.map((cert, i) => (
                            <CertCard key={cert.title + i} cert={cert} index={i} />
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Experience;