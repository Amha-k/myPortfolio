import React, { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace this with your real backend/form handler endpoint
      const response = await axios.post("http://localhost:5000/api/portfolio/contact", formData)


      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white py-16 px-6 flex items-start transition-colors duration-500"
    >
      <div className="max-w-md w-full bg-gray-50 p-8 rounded-lg shadow-lg animate-fadeInUp">
        <h2 className="text-4xl font-bold mb-6 text-sky-700">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-md p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-md p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="rounded-md p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-sky-600 hover:bg-sky-700 transition-colors duration-300 text-white rounded-md py-3 font-semibold shadow-md focus:outline-none focus:ring-4 focus:ring-sky-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
