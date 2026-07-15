import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <section className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 text-gray-800 dark:text-gray-200">
            <motion.div
                className="text-center max-w-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="text-[10rem] font-extrabold leading-none bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-200 select-none"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
                >
                    404
                </motion.div>

                <h1 className="text-2xl font-bold mb-3 mt-2 text-gray-900 dark:text-white">
                    Page Not Found
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
                    Looks like this page took a wrong turn. It might have been moved, deleted, or never existed.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-pink-300 text-white hover:from-pink-600 hover:to-pink-400 shadow-lg shadow-pink-500/20 transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default NotFound;
