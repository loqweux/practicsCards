import { motion } from "framer-motion";
import type { CardProps } from "../utils/props";

export default function Card({ title, description }: CardProps) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-shadow"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.03, rotate: 0.2 }}
      transition={{ duration: 0.22, ease: "easeInOut" }}
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 leading-tight tracking-wide">
          {title}
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
