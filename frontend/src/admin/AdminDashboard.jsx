import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { logout } = useAuth();

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <nav className="space-x-4">
        <Link to="/admin/skills" className="text-blue-600 hover:underline">Manage Skills</Link>
        <Link to="/admin/projects" className="text-blue-600 hover:underline">Manage Projects</Link>
        <Link to="/admin/contacts" className="text-blue-600 hover:underline">Manage Contacts</Link>
      </nav>
      <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}
