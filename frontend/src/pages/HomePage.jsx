import React from "react";
import profileImage from "../assets/profile.jpg";

export default function HomePage() {
  const name = "Amha";

  return (
    <div>
      <section
        id="about"
        className="min-h-screen dynamic-hero flex flex-col md:flex-row items-center justify-center px-6 py-12 text-white transition-colors duration-500"
      >
        <div className="md:w-1/2 max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-sm">
            Hi — I’m {name}.
          </h1>

          <p className="text-lg md:text-xl max-w-xl mb-8 opacity-95">
            I design and implement backend systems for web products: reliable APIs, order management flows, authentication, and data processing. Recent work includes payment integrations, web scraping for data pipelines, and building tooling to make teams move faster.
          </p>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-teal-700 rounded-md shadow-md hover:scale-105 transform transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/60 text-white rounded-md hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="profile-side profile-frame glass overflow-hidden w-64 h-64 md:w-96 md:h-96">
            <img src={profileImage} alt={`Portrait of ${name}`} className="profile-photo" />
          </div>
        </div>
      </section>

    </div>
  );
}
