import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ManageSkills() {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ name: "", level: "", logoSrc: "", color: "" });
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
      logoSrc: form.logoSrc || undefined,
      color: form.color || undefined,
    };
    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/portfolio/skills/admin/${editingId}`,
          payload,
          axiosConfig
        );
      } else {
        await axios.post(
          "http://localhost:5000/api/portfolio/skills/admin",
          payload,
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
        <input
          name="logoSrc"
          type="text"
          placeholder="Logo URL (optional)"
          value={form.logoSrc}
          onChange={handleChange}
          className="p-2 rounded border w-full"
        />
        <input
          name="color"
          type="text"
          placeholder="Color gradient/tone (optional)"
          value={form.color}
          onChange={handleChange}
          className="p-2 rounded border w-full"
        />
        <div className="flex gap-2 items-center">
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
            {editingId ? "Update Skill" : "Add Skill"}
          </button>
          {form.logoSrc ? (
            <img src={form.logoSrc} alt="preview" className="w-8 h-8 object-contain" />
          ) : null}
        </div>
      </form>

      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill._id} className="flex justify-between items-center border p-2 rounded">
            <div className="flex items-center gap-3">
              {skill.logoSrc ? (
                <img src={skill.logoSrc} alt={skill.name} className="w-8 h-8 object-contain" />
              ) : null}
              <div>
                <strong>{skill.name}</strong>
                <div className="text-sm text-gray-600">{skill.level}%</div>
              </div>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(skill)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                Edit
              </button>
              <button onClick={() => handleDelete(skill._id)} className="bg-red-600 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
