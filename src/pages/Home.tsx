import { Card, Header } from "../components/index";
import cardsData from "../utils/cards.json";

const Home: React.FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main className="p-4 grid gap-4 max-sm:gap-2 grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {cardsData.cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </main>
  </>
);

export default Home;
