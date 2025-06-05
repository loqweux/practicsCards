import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 transition hover:scale-105 hover:shadow-xl duration-300">
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default Card;
