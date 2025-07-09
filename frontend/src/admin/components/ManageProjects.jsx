import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    link: "",
  });
  const [editingId, setEditingId] = useState(null);

  // 🔐 Retrieve token once
  const token = localStorage.getItem("token");

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/portfolio/projects/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(res.data);
    } catch (err) {
      console.error("Fetch error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description) return;

    try {
      let res;
      if (editingId) {
        res = await axios.put(
          `http://localhost:5000/api/portfolio/projects/admin/${editingId}`,
          form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        res = await axios.post(
          "http://localhost:5000/api/portfolio/projects/admin",
          form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      console.log("Response:", res.data);
      setForm({ title: "", description: "", imageUrl: "", link: "" });
      setEditingId(null);
      fetchProjects();
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
    }
  };

  const handleEdit = (project) => {
    setForm(project);
    setEditingId(project._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/portfolio/projects/admin/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchProjects();
    } catch (err) {
      console.error("Delete error:", err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Projects</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="link"
          placeholder="Project Link"
          value={form.link}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update Project" : "Add Project"}
        </button>
      </form>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project._id} className="border p-4 rounded shadow-sm">
            {/* Added image display */}
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full max-w-xs rounded mb-2"
              />
            )}
            <h3 className="font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              Visit
            </a>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(project)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
