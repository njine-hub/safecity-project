import React from "react";

export default function IncidentCard({ title, description, image }) {
  return (
    <div className="card max-w-sm mx-auto">
      <img src={image} alt={title} className="rounded-lg w-full h-48 object-cover"/>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
