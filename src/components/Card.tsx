import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <motion.div
    className="bg-white shadow-md rounded-lg p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.22 }}
    whileHover={{ scale: 1.05 }}
  >
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

export default Card;
