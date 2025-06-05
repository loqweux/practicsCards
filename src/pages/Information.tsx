import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface PostProps {
  id: number;
  title: string;
  body: string;
}

interface PhotoProps {
  id: number;
  url: string;
}

interface CombinedProps {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
}

export default function Information() {
  const [data, setData] = useState<CombinedProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, photoRes] = await Promise.all([
          axios.get<PostProps[]>(
            "https://jsonplaceholder.typicode.com/posts?_limit=12"
          ),
          axios.get<PhotoProps[]>(
            "https://jsonplaceholder.typicode.com/photos?_limit=12"
          ),
        ]);
        const combined = postsRes.data.map((post, i) => {
          const colorHex = photoRes.data[i].url.split("/").pop();
          const newImageUrl = `https://placehold.co/600/${colorHex}/white?text=Post+${post.id}`;

          return {
            id: post.id,
            title: post.title || "",
            body: post.body || "",
            imageUrl: newImageUrl,
          };
        });

        setData(combined);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="p-6 grid gap-4 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {data.map((post) => (
        <motion.div
          className="border-1 p-4 rounded-lg hover:shadow-lg transition-shadow"
          key={post.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.03, rotate: 0.2 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          <h1 className="font-bold">{post.title}</h1>
          <p>{post.body}</p>
          <img src={post.imageUrl} alt="Нет изображения" />
        </motion.div>
      ))}
    </main>
  );
}
