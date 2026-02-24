import { useEffect, useState } from "react";
import getAllStarships from "./services/sw-api";
import StarshipCard from "./components/StarshipCard";
import "./style.css";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const data = await getAllStarships();
        setStarships(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStarships();
  }, []);

  return (
    <div className="container">
      <h1>Star Wars Starships</h1>

      <div className="card-container">
        {starships.map((ship) => (
          <StarshipCard key={ship.url} starship={ship} />
        ))}
      </div>
    </div>
  );
}

export default App;
