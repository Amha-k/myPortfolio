
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ManageContacts() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/portfolio/contact");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/portfolio/contact/${id}`);
    fetchContacts();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Contacts</h2>
      {contacts.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((c) => (
            <li key={c._id} className="border p-4 rounded shadow-sm">
              <p><strong>Name:</strong> {c.name}</p>
              <p><strong>Email:</strong> {c.email}</p>
              <p><strong>Message:</strong> {c.message}</p>
              <button
                onClick={() => handleDelete(c._id)}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
