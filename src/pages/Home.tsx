import { Card } from "../components/index";
import cardsData from "../utils/cards.json";

export default function Home() {
  return (
    <main className="p-4 grid gap-4 max-sm:gap-2 grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {cardsData.cards.map(({ title, description }, index) => (
        <Card key={index} title={title} description={description} />
      ))}
    </main>
  );
}
