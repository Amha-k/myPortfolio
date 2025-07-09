import React from "react";
import Skills from "../components/Skills";
import profileImage from "../assets/profile.jpg"; // Import your image

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white dark:bg-gray-900 transition-colors duration-500">
        <img
          src={profileImage}
          alt="My Profile"
          className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover border-4 border-indigo-600 dark:border-indigo-400"
        />
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-700 dark:text-indigo-400 animate-fadeInUp">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg max-w-xl mb-8 text-gray-700 dark:text-gray-300 animate-fadeInUp delay-200">
          hi my name is Amha I am a passionate developer focused on building amazing web experiences.
        </p>
       
      </section> 
      <Skills />
    
    </>

    
  );
}
