import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 0.84, 0.44, 1] } },
};

export default function Hero() {
  return (
    <motion.section
      className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="text-center max-w-3xl px-6">
        <motion.h1 variants={item} className="text-5xl md:text-6xl font-extrabold mb-4 text-teal-700 dark:text-teal-400">
          Hi, I'm Amha
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          I build modern, accessible front-end experiences. I focus on clean design and thoughtful interactions.
        </motion.p>

        <motion.div variants={item} className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-teal-600 text-white rounded-md shadow hover:scale-105 transform transition focus-ring"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
