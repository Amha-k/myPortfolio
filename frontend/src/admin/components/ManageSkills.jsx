import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ManageSkills() {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ name: "", level: "" });
  const [editingId, setEditingId] = useState(null);

  // Get token from localStorage
  const token = localStorage.getItem("token");

  // Set default axios headers if token exists
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchSkills = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/portfolio/skills/admin",
        axiosConfig
      );
      setSkills(res.data);
    } catch (err) {
      console.error("Error fetching skills:", err);
    }
  };

  useEffect(() => {
    fetchSkills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.level) return;
 const payload = {
    name: form.name,
    level: Number(form.level), 
  };
    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/portfolio/skills/admin/${editingId}`,
          form,
          axiosConfig
        );
      } else {
        await axios.post(
          "http://localhost:5000/api/portfolio/skills/admin",
          form,
          axiosConfig
        );
      }

      setForm({ name: "", level: "" });
      setEditingId(null);
      fetchSkills();
    } catch (err) {
      console.error("Error submitting skill:", err);
    }
  };

  const handleEdit = (skill) => {
    setForm({ name: skill.name, level: skill.level });
    setEditingId(skill._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/portfolio/skills/admin/${id}`,
        axiosConfig
      );
      fetchSkills();
    } catch (err) {
      console.error("Error deleting skill:", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Skills</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          name="name"
          placeholder="Skill Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 rounded border w-full"
        />
        <input
          name="level"
          type="number"
          placeholder="Level (%)"
          value={form.level}
          onChange={handleChange}
          className="p-2 rounded border w-full"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update Skill" : "Add Skill"}
        </button>
      </form>

      <ul className="space-y-2">
        {skills.map((skill) => (
          <li
            key={skill._id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <strong>{skill.name}</strong> - {skill.level}%
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(skill)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(skill._id)}
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
