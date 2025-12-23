import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { id: 'node', name: 'Node.js', logoSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/node-dot-js.svg', color: 'from-lime-400 to-green-600' },
  { id: 'express', name: 'Express', logoSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg', color: 'from-slate-300 to-slate-500' },
  { id: 'python', name: 'Python', logoSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg', color: 'from-yellow-300 to-amber-500' },
  { id: 'webscraping', name: 'Web Scraping', logoSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/scrapy.svg', color: 'from-emerald-300 to-emerald-500' },
  { id: 'postgres', name: 'PostgreSQL', logoSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg', color: 'from-sky-400 to-indigo-500' },
  { id: 'mongodb', name: 'MongoDB', logoSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg', color: 'from-lime-300 to-lime-600' },
  { id: 'mysql', name: 'MySQL', logoSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg', color: 'from-sky-300 to-sky-600' },
  { id: 'html', name: 'HTML5', logoSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg', color: 'from-amber-300 to-amber-500' },
  { id: 'css', name: 'CSS3', logoSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg', color: 'from-sky-400 to-sky-600' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 12, stiffness: 120 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-sky-700 dark:text-sky-400">Skills</h2>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((s) => (
            <motion.div variants={item} key={s.id} className="flex flex-col items-center">
              <motion.div whileHover={{ scale: 1.08, rotate: 6 }} whileTap={{ scale: 0.98 }} className={`skill-chip-lg bg-gradient-to-br ${s.color} p-1`}>
                <div className="skill-logo flex items-center justify-center">
                  <img src={s.logoSrc} alt={s.name} className="w-10 h-10" />
                </div>
              </motion.div>
              <div className="mt-3 text-center text-sm skill-name">{s.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
