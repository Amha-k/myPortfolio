import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeId, setActiveId] = useState(null); // for touch / keyboard toggle

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
      title: "Personal Portfolio — Interactive Layout",
      description:
        "A compact, responsive portfolio layout emphasizing clear hierarchy and subtle motion to highlight projects and skills.",
      imageUrl: null,
    },
    {
      id: "demo-2",
      title: "Task List with Offline Support",
      description:
        "A small productivity app that keeps work in sync locally and shows simple, predictable interactions for adding and completing tasks.",
      imageUrl: null,
    },
    {
      id: "demo-3",
      title: "Component Library & Styles",
      description:
        "A focused design toolkit of buttons, forms and layout utilities crafted to be accessible and easy to reuse across pages.",
      imageUrl: null,
    },
  ];

  const displayProjects = projects && projects.length ? projects : demoProjects;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-semibold mb-8 text-sky-700">Projects</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        {displayProjects.map((project, i) => {
          const id = project._id || project.id || project.id;
          const isActive = activeId === id;
          return (
            <motion.article
              key={id}
              className="card bg-white dark:bg-gray-800 p-6 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg"
              whileHover={{ y: -4, scale: 1.01 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onClick={() => setActiveId(isActive ? null : id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveId(isActive ? null : id);
              }}
              role="button"
              tabIndex={0}
            >
              <div className="w-full h-56 rounded-md overflow-hidden mb-5 bg-gradient-to-r from-sky-100 to-sky-300 flex items-center justify-center">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center px-4">
                    <h3 className="text-lg font-semibold text-sky-800">{project.title}</h3>
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-sky-800 dark:text-sky-200">{project.title}</h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm max-h-20 overflow-hidden">{project.description}</p>

              {/* Explanation overlay: appears on hover (desktop) or when tapped (touch) */}
              <motion.div
                className={`absolute inset-0 bg-white/95 dark:bg-gray-900/95 p-4 flex flex-col justify-center items-start rounded-lg transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                } group-hover:opacity-100 group-hover:pointer-events-auto`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.18 }}
              >
                <h4 className="text-md font-semibold text-sky-800 dark:text-sky-200 mb-2">Overview</h4>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-3">{project.description}</p>
                {project.details && <p className="text-sm text-gray-600 dark:text-gray-300">{project.details}</p>}
                <div className="mt-3">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-600 hover:underline text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit External
                    </a>
                  ) : (
                    <Link
                      to={`/projects/${id}`}
                      className="text-sky-600 hover:underline text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                    </Link>
                  )}
                </div>
              </motion.div>
              <div className="mt-4">
                {!project.url && (
                  <Link to={`/projects/${id}`} className="text-sm text-sky-600 hover:underline">
                    Read more
                  </Link>
                )}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
