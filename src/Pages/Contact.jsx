import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Initialize environment variables outside the render loop
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setSent(false);
        setError(null);

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                PUBLIC_KEY
            )
            .then(() => {
                setSent(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
            })
            .catch(() => setError("Failed to send message. Please try again later."))
            .finally(() => setSending(false));
    };

    const inputClass =
        "mt-1 block w-full rounded-lg px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-200 shadow-sm";

    const contactInfo = [
        { icon: Mail, title: "Email Me", value: "ondaechanny@gmail.com", href: "mailto:ondaechanny@gmail.com", isLink: true },
        { icon: Phone, title: "Call Me", value: "+2348169540329", href: "tel:+2348169540329", isLink: true },
        { icon: MapPin, title: "Location", value: "Ogoja, Cross River, Nigeria", href: null, isLink: false },
    ];

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/share/1C9vDUJ5qP/", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/echannyonda", label: "Instagram" },
        { icon: Linkedin, href: "http://www.linkedin.com/in/echannyidagu", label: "LinkedIn" },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 min-h-screen text-gray-800 dark:text-gray-200">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <motion.h2
                    className="text-4xl font-extrabold mb-4 text-center relative after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-pink-500 after:rounded-full"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Get in <span className="text-pink-500">Touch</span>
                </motion.h2>

                <motion.p
                    className="text-center text-base max-w-xl mx-auto mt-6 mb-14 text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I'm currently available for new opportunities and collaborations. Feel free to send me a message — I'll get back to you as soon as possible.
                </motion.p>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    
                    {/* Contact Form */}
                    <motion.div
                        className="lg:w-1/2 w-full"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {sent && (
                                    <div className="flex items-center gap-2 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg px-4 py-3 text-sm font-medium">
                                        ✅ Your message has been sent successfully!
                                    </div>
                                )}
                                {error && (
                                    <div className="flex items-center gap-2 text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg px-4 py-3 text-sm font-medium">
                                        {error}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {["name", "email"].map((field) => (
                                        <div key={field}>
                                            <label htmlFor={field} className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                            </label>
                                            <input
                                                type={field === "email" ? "email" : "text"}
                                                id={field}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                autoComplete={field === "email" ? "email" : "name"}
                                                placeholder={field === "email" ? "you@example.com" : "Your name"}
                                                className={inputClass}
                                                required
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What's this about?"
                                        className={inputClass}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or opportunity..."
                                        className={inputClass}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-pink-600 to-pink-400 text-white hover:from-pink-700 hover:to-pink-500 shadow-md shadow-pink-200 dark:shadow-pink-900/30 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                                >
                                    {sending ? "Sending…" : "Send Message →"}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info Card Panel */}
                    <motion.div
                        className="lg:w-1/2 w-full space-y-6"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {contactInfo.map((item, index) => {
                            const CardWrapper = item.isLink ? motion.a : motion.div;
                            const linkProps = item.isLink
                                ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                                : {};

                            return (
                                <CardWrapper
                                    key={index}
                                    {...linkProps}
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-5 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-200 group block"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition-colors duration-200">
                                        <item.icon size={22} className="text-pink-500 dark:text-pink-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">{item.title}</p>
                                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5">{item.value}</p>
                                    </div>
                                </CardWrapper>
                            );
                        })}

                        {/* Social Links Card */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
                            <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">Follow Me</p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-200 shadow-sm"
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;