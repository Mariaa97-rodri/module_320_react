import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const apiKey = "70b745aa-bb1d-44f0-8d7a-8371de73669b";
  const { symbol } = useParams();
  const url = `https://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const getCoin = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
      } catch (e) {
        console.error(e);
      }
    };
    getCoin();
  }, [symbol]);

  if (!coin || !coin.rate) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{coin.asset_id_base} / {coin.asset_id_quote}</h1>
      <h2>${coin.rate.toFixed(2)}</h2>
    </div>
  );
}