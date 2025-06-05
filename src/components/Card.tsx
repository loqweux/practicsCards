import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <motion.div
    className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-shadow"
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ scale: 1.03, rotate: 0.2 }}
    transition={{ duration: 0.22, ease: "easeInOut" }}
  >
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default Card;
