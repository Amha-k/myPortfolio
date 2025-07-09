import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  axios.get("http://localhost:5000/api/portfolio")
      .then((response) => {
        setSkills(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch skills.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section
      id="skills-section"
      className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-4xl font-bold mb-8 text-indigo-700 dark:text-indigo-400">
        Skills
      </h2>
      <div className="space-y-6">
        {skills.map(({ name, level }) => (
          <div key={name}>
            <div className="flex justify-between mb-1">
              <span className="text-lg font-semibold">{name}</span>
              <span className="text-sm">{level}%</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-indigo-600 dark:bg-indigo-400 h-4 rounded-full transition-all duration-700 ease-in-out"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
