import React from "react";
import { useEffect, useState } from "react";
import axios from "../axios";

export default function Contact() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    axios.get("/contact").then((res) => setContact(res.data));
  }, []);

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Location:</strong> {contact.location}</p>
    </section>
  );
}
