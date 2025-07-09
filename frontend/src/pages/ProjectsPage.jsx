import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/portfolio/projects")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch projects.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-8 text-indigo-700 dark:text-indigo-400">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project._id || project.id} // Use _id if it's MongoDB, fallback to id
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline font-medium"
              >
                View the project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
