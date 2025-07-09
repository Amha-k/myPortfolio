import React from "react";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Toggle dark mode on button click
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Close mobile menu when navigation clicked
  const handleLinkClick = () => setMenuOpen(false);

  // Nav link style helper
  const isActive = (path) =>
    location.pathname === path
      ? "text-indigo-600 dark:text-indigo-400 font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400";

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / Title */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          MyPortfolio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" onClick={handleLinkClick} className={isActive("/")}>
            Home
          </Link>
          <Link to="/projects" onClick={handleLinkClick} className={isActive("/projects")}>
            Projects
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className={isActive("/contact")}>
            Contact
          </Link>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="ml-6 p-2 rounded-full bg-indigo-100 dark:bg-indigo-700 hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Sun icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.485-10.485l-.707.707M4.222 19.778l-.707.707M21 12h-1M4 12H3m16.485 5.485l-.707-.707M4.222 4.222l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Moon icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile hamburger menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="mr-4 p-2 rounded-full bg-indigo-100 dark:bg-indigo-700 hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Sun icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.485-10.485l-.707.707M4.222 19.778l-.707.707M21 12h-1M4 12H3m16.485 5.485l-.707-.707M4.222 4.222l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Moon icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Close icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Hamburger icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-800 absolute top-full left-0 w-full shadow-md">
            <ul className="flex flex-col p-4 space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className={isActive("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={handleLinkClick}
                  className={isActive("/projects")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className={isActive("/contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
