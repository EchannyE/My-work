import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Users, GraduationCap, Monitor, Link, Bot, Sparkles } from "lucide-react";

const Services = () => {
    const servicesData = [
        {
            icon: Code,
            title: "Web Development",
            description:
                "I craft responsive, high-performance web applications tailored to your needs, ensuring a seamless user experience across all devices.",
        },
        {
            icon: Monitor,
            title: "Responsive Design",
            description:
                "I specialise in creating visually appealing and user-friendly interfaces that adapt flawlessly to any screen size, enhancing user engagement.",
        },
        {
            icon: Bot,
            title: "AI Workflow Automation",
            description:
                "I design and build end-to-end automation pipelines using n8n and LangChain — eliminating repetitive tasks, connecting APIs, and making your systems smarter.",
            highlight: true,
        },
        {
            icon: Sparkles,
            title: "Generative AI Integration",
            description:
                "I integrate LLMs like Google Gemini and OpenAI into your products to power chatbots, content generation, intelligent search, and AI-driven features.",
            highlight: true,
        },
        {
            icon: Database,
            title: "Database Design & Management",
            description:
                "I design and manage robust database solutions, ensuring data integrity, efficient storage, and secure retrieval for your applications.",
        },
        {
            icon: Link,
            title: "API Integration",
            description:
                "Seamlessly connect your applications with third-party services and build custom APIs to extend functionality and efficiency.",
        },
        {
            icon: Users,
            title: "Consultation & Code Review",
            description:
                "Leverage my expertise for architectural guidance, performance optimisation, and rigorous code reviews to elevate your project's quality.",
        },
        {
            icon: GraduationCap,
            title: "Code Instruction & Mentorship",
            description:
                "I provide clear, practical coding instruction and mentorship to help aspiring developers master modern web technologies and AI-powered development.",
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen text-gray-800 dark:text-gray-200">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold mb-4 text-center relative after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-pink-500 dark:after:bg-pink-400 after:rounded-full"
                >
                    What <span className="text-pink-500">I Do</span>
                </motion.h2>
                <motion.p
                    className="text-center text-gray-500 dark:text-gray-400 mt-6 mb-14 max-w-xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                     From modern web applications to AI-powered automation, I build
            digital products that help businesses move faster and smarter.
        

                </motion.p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.06, rotate: 0.5 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className={`relative rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border cursor-pointer
                                ${service.highlight
                                    ? 'bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border-pink-300 dark:border-pink-500/50 shadow-pink-100 dark:shadow-pink-900/20'
                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {service.highlight && (
                                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-pink-500 text-white">
                                    New
                                </span>
                            )}
                            <motion.div
                                initial={{ rotate: -20, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                viewport={{ once: true }}
                                className="text-pink-500 dark:text-pink-400 mb-4"
                            >
                                <service.icon size={48} strokeWidth={1.5} />
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
