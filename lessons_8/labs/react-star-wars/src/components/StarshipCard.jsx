function StarshipCard ({starship}) {
  return (
    <div className="card">
      <h2>{starship.name}</h2>
      <p>ModelL {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Passengers: {starship.passengers}</p>
    </div>
  );
}

export default StarshipCard;