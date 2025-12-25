import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Splash from "./components/Splash";

import HomePage from "./pages/HomePage";
import FloatingShapes from "./components/FloatingShapes";
import Skills from "./components/Skills";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/LoginPage";
import ProjectDetail from "./pages/ProjectDetail";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ManageSkills from "./admin/components/ManageSkills";
import ManageProjects from "./admin/components/ManageProjects";
import ManageContacts from "./admin/components/ManageContacts";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [showSplash, setShowSplash] = useState(() => {
    // show splash only on first visit per session
    return sessionStorage.getItem("seenSplash") ? false : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const finishSplash = () => {
    sessionStorage.setItem("seenSplash", "1");
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-500 text-gray-900 dark:text-gray-100">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {showSplash && <Splash onFinish={finishSplash} darkMode={darkMode} />}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <HomePage />
                </div>

                <div id="decor" className="max-w-7xl mx-auto px-6 py-2">
                  <FloatingShapes />
                </div>

                <div id="skills" className="max-w-7xl mx-auto px-6 py-4">
                  <Skills />
                </div>

                <div id="projects" className="max-w-7xl mx-auto px-6 py-4">
                  <ProjectsPage />
                </div>

                <div id="contact" className="max-w-7xl mx-auto px-6 py-4">
                  <ContactPage />
                </div>
              </>
            }
          />

          <Route path="/projects/:id" element={<ProjectDetail />} />

          {/* Keep routes for admin/login functionality */}
          <Route path="/login" element={<Login />} />
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



