import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/portfolio/projects")
      .then((response) => {
        setProjects(response.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch projects.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="py-8 text-center">Loading projects...</p>;

  const demoProjects = [
    {
      id: "demo-1",
      title: "Interactive Portfolio UI",
      description:
        "A responsive portfolio layout with animated interactions and accessible components.",
      imageUrl: null,
    },
    {
      id: "demo-2",
      title: "Task Manager App",
      description: "A lightweight task manager showcasing CRUD operations and offline storage.",
      imageUrl: null,
    },
    {
      id: "demo-3",
      title: "Design System Kit",
      description:
        "A reusable component library demonstrating tokens, variants, and accessibility.",
      imageUrl: null,
    },
  ];

  const displayProjects = projects && projects.length ? projects : demoProjects;

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-sky-700">Projects</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        {displayProjects.map((project, i) => (
          <motion.article
            key={project._id || project.id || project.id}
            className="card bg-white p-4 rounded-lg overflow-hidden"
            whileHover={{ y: -4, scale: 1.01 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <div className="w-full h-32 rounded-md overflow-hidden mb-3 bg-gradient-to-r from-sky-100 to-sky-300 flex items-center justify-center">
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center px-4">
                  <h3 className="text-lg font-semibold text-sky-800">{project.title}</h3>
                </div>
              )}
            </div>

            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-gray-700 mb-2 text-sm">{project.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
