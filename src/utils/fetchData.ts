import axios from "axios";
import type { CombinedProps } from "./props";

export const fetchCombinedData = async (): Promise<CombinedProps[]> => {
  const [postsRes, photosRes] = await Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=12"),
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=12"),
  ]);

  return postsRes.data.map((post: any, i: number) => {
    const colorHex = photosRes.data[i].url.split("/").pop();
    const imageUrl = `https://placehold.co/600/${colorHex}/white?text=Post+${post.id}`;
    return { id: post.id, title: post.title, body: post.body, imageUrl };
  });
};
