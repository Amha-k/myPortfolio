import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    axios
      .get(`http://localhost:5000/api/portfolio/projects/${id}`)
      .then((res) => {
        if (!mounted) return;
        setProject(res.data);
      })
      .catch((e) => console.error(e))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, [id]);

  if (loading) return <p className="py-8 text-center">Loading project...</p>;
  if (!project) return <p className="py-8 text-center">Project not found.</p>;

  // parse details for simple keys like Role:, Tech:, Outcome:
  const parseDetails = (text = "") => {
    const result = { raw: text };
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    lines.forEach((ln) => {
      const lower = ln.toLowerCase();
      if (lower.startsWith("role:")) result.role = ln.replace(/^[Rr]ole:\s*/,'');
      else if (lower.startsWith("tech:")) result.tech = ln.replace(/^[Tt]ech:\s*/,'');
      else if (lower.startsWith("outcome:")) result.outcome = ln.replace(/^[Oo]utcome:\s*/,'');
    });
    return result;
  };

  const details = parseDetails(project.details);

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <Link to="/" className="text-sky-600 hover:underline text-sm">← Back</Link>

      <article className="mt-4 bg-white rounded-lg p-6 shadow-lg">
        {project.imageUrl && (
          <img src={project.imageUrl} alt={project.title} className="w-full h-72 object-cover rounded-md mb-6" />
        )}

        <header>
          <h1 className="text-3xl font-bold text-sky-800 dark:text-sky-200 mb-2">{project.title}</h1>
          <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {project.details && (
              <div className="prose text-gray-700 dark:text-gray-200">
                <h3 className="text-xl font-semibold">Case study</h3>
                <p>{project.details}</p>
              </div>
            )}
          </div>

          <aside className="bg-sky-50 dark:bg-gray-800 p-4 rounded">
            {details.role && (
              <div className="mb-3">
                <h4 className="font-semibold">Role</h4>
                <p className="text-sm text-gray-700">{details.role}</p>
              </div>
            )}

            {details.tech && (
              <div className="mb-3">
                <h4 className="font-semibold">Tech</h4>
                <p className="text-sm text-gray-700">{details.tech}</p>
              </div>
            )}

            {details.outcome && (
              <div>
                <h4 className="font-semibold">Outcome</h4>
                <p className="text-sm text-gray-700">{details.outcome}</p>
              </div>
            )}
          </aside>
        </section>

        <footer className="mt-6">
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="inline-block bg-sky-600 text-white px-4 py-2 rounded">
              Visit Project
            </a>
          )}
        </footer>
      </article>
    </section>
  );
}
