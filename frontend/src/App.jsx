import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/LoginPage";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ManageSkills from "./admin/components/ManageSkills";
import ManageProjects from "./admin/components/ManageProjects";
import ManageContacts from "./admin/components/ManageContacts";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-500 text-gray-900 dark:text-gray-100">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/login" element={    <Login />} /> 
             <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />

            </ProtectedRoute>
          }
        />
        <Route path="admin/skills" element={<ManageSkills />} />
        <Route path="admin/projects" element={<ManageProjects />} />
        <Route path="admin/contacts" element={<ManageContacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;



