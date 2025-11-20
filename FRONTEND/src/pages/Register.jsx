import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">

      {/* Marquee */}
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        className="bg-green-200 text-green-900 font-semibold p-2 rounded mb-6 w-full max-w-xl"
      >
        Welcome to SafeCity! Register to start reporting incidents and keeping your community safe 🌍🚨
      </marquee>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  );
}
