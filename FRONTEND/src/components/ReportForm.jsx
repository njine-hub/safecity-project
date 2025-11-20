import React, { useState } from "react";

export default function ReportForm() {
  const [form, setForm] = useState({ title: "", description: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Incident reported!");
    setForm({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <input 
        type="text"
        name="title"
        placeholder="Incident title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border mb-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 border mb-2 rounded"
      />
      <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">Report</button>
    </form>
  );
}
