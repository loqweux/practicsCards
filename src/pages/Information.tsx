import { useEffect, useState } from "react";
import { fetchCombinedData } from "../utils/fetchData";
import { motion } from "framer-motion";
import type { CombinedProps } from "../utils/props";

export default function Information() {
  const [data, setData] = useState<CombinedProps[]>([]);

  useEffect(() => {
    fetchCombinedData().then(setData).catch(console.error);
  }, []);

  return (
    <main className="p-6 grid gap-4 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {data.map(({ id, title, body, imageUrl }) => (
        <motion.div
          key={id}
          className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.03, rotate: 0.2 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          <h1 className="font-bold text-xl mb-2 text-gray-800">{title}</h1>
          <p className="text-gray-600 mb-2">{body}</p>
          <img
            src={imageUrl}
            alt="Пост"
            loading="lazy"
            className="w-full h-auto"
          />
        </motion.div>
      ))}
    </main>
  );
}
