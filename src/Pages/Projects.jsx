import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            imageUrl: "/img/Ai.jpeg",
            title: "AI Financial Assistant",
            description: "A comprehensive financial management tool that uses AI to help users track expenses, set budgets, and achieve financial goals. Features a user-friendly interface and real-time analytics.",
            techStack: ["React", "Tailwind CSS", "JWT", "Node.js", "MongoDB", "Express"],
            liveUrl: "https://ai-financial-assistant-frontend.vercel.app/",
            githubUrl: "https://github.com/EchannyE/july-showcase.git",
        },
        {
            id: 2,
            imageUrl: "/img/movies.jpeg",
            title: "EE-Movie Recommendation App",
            description: "An intuitive web application exploring trending cinema. Leverages external movie database APIs to allow users to search, filter, and discover personalized movie recommendations instantly.",
            techStack: ["React", "Node.js", "API", "Express", "MongoDB", "Tailwind CSS"],
            liveUrl: "https://frontend-capstone-nine.vercel.app/",
            githubUrl: "https://github.com/EchannyE/Capstone-Project.git",
        },
        {
            id: 3,
            imageUrl: "/img/game.jpeg",
            title: "Color Guessing Game",
            description: "A fun and interactive game where users guess colors based on RGB values. It features a clean UI and responsive design, making it accessible on all devices.",
            techStack: ["HTML", "Tailwind", "Js" ],
            liveUrl: "https://color-guessing-game-usz9.vercel.app/",
            githubUrl: "https://github.com/EchannyE/color-guessing-game.git",
        },
        {
            id: 4,
            imageUrl: "/img/learnify.PNG",
            title: "Learnify",
            description: "A full-stack AI-powered student learning assistant featuring note ingestion, OCR text extraction, quiz generation, an AI tutor (Google Gemini), RAG-based context search, study plan generation via n8n, and a student analytics dashboard.",
            techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Google Gemini", "n8n", "RAG"],
            liveUrl: "https://learnify-lyart.vercel.app/",
            githubUrl: "https://github.com/EchannyE/learnify.git",
        },
        {
            id: 5,
            imageUrl: "/img/scoreflowAI.PNG",
            title: "ScoreFlow AI",
            description: "An AI-powered scoring and assessment platform that automates evaluation workflows. Leverages generative AI to analyse submissions, produce detailed score breakdowns, and deliver actionable feedback at scale.",
            techStack: ["React", "Node.js", "AI/ML", "REST API", "Tailwind CSS"],
            liveUrl: "https://score-flow-ai-app.vercel.app/",
            githubUrl: "https://github.com/EchannyE/ScoreFlow-AI.git",
        },
        {
            id: 6,
            imageUrl: "/img/Career.PNG",
            title: "Career Navigator",
            description: "An AI career coaching app that compares a candidate's resume against a target role and returns a practical match score, gap analysis, and a personalised learning roadmap — powered by Google Gemini and an n8n automation pipeline.",
            techStack: ["React", "Vite", "n8n", "Google Gemini", "Tailwind CSS"],
            liveUrl: "https://career-navigator-chi.vercel.app/",
            githubUrl: "https://github.com/EchannyE/career-navigator.git",
        },
        {
            id: 7,
            imageUrl: "/img/viral-loop.PNG",
            title: "Viral Loop Social Agent",
            description: "An n8n automation workflow that transforms a single content idea into a fully ready-to-publish social post — generating platform-aware captions, hashtags, AI image prompts, and visual assets using Google Gemini and Stability AI.",
            techStack: ["n8n", "Google Gemini", "Stability AI", "AI Automation"],
            liveUrl: null,
            githubUrl: "https://github.com/EchannyE/social-agent.git",
        },
        {
            id: 8,
            imageUrl: "/img/portfolio.PNG",
            title: "Portfolio Website",
            description: "This very portfolio website you are viewing. Built from the ground up to showcase my skills in a clean and professional manner.",
            techStack: ["React", "Tailwind CSS"],
            liveUrl: "https://portfolio-new-murex-ten-75.vercel.app/",
            githubUrl: "https://github.com/EchannyE/Portfolio-new.git"
        },

        {
            id: 5,
            imageUrl: "/img/budget.jpeg",
            title: "Budget tracker",
            description: "A budget tracking application that helps users manage their finances by categorizing expenses and providing insights into spending habits.",
            techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
            liveUrl: "https://budget-management-tracker-seven.vercel.app/",
            githubUrl: "git@github.com:EchannyE/Budget-management--tracker.git"
        },

    ];

    return (
        <section className='bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen text-gray-800 dark:text-gray-200'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-4xl font-extrabold mb-4 text-center relative after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-pink-500 dark:after:bg-pink-400 after:rounded-full'
                >
                    My <span className='text-pink-500'>Projects</span>
                </motion.h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 border border-gray-200 dark:border-gray-700 flex flex-col"
                        >
                            {/* Card header — image or gradient */}
                            {project.imageUrl ? (
                                <img
                                    src={project.imageUrl}
                                    alt={`Screenshot of ${project.title}`}
                                    className="w-full h-48 object-cover"
                                />
                            ) : (
                                <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                    <span className="text-6xl select-none">{project.icon}</span>
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">{project.description}</p>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-pink-500 to-pink-100 text-pink-900 hover:from-pink-600 hover:to-pink-400 focus:ring-pink-500 shadow-md"
                                        aria-label={`View live demo of ${project.title}`}
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 shadow-md border-2 border-pink-500"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        <Github size={18} />
                                        {project.liveUrl ? 'GitHub' : 'View Repository'}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
