import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-indigo-700 dark:bg-indigo-900 text-white py-6 mt-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} amha. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link to="/" className="hover:underline transition">Home</Link>
          <Link to="/" className="hover:underline transition">About</Link>
          <Link to="/" className="hover:underline transition">Skills</Link>
          <Link to="/projects" className="hover:underline transition">Projects</Link>
          <Link to="/contact" className="hover:underline transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
