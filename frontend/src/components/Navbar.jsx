import React from "react";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white fixed w-full top-0 z-50 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Amha — Backend Engineer</h1>
      <div className="space-x-4 text-sm">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
