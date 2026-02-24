import React from 'react'
import { useState } from 'react'

export default function Starships() {
  //create state to hold starships data

  const [starships, setStarships] = useState([])

  return (
    <div>
      <h1>Star Wars Characters</h1>
  {/* display starships data here */}
  <ul>
    {starships.map((starships, index) => (
      <li key={index}>{ship.name}</li>
    ))}
  </ul>
</div>
  );
}