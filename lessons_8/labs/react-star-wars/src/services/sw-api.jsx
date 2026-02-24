export async function getAllStarships() {
  const response = await fetch("https://swapi.dev/api/starships/");
  if (!response.ok) throw new Error("Failed to fetch starships");
  return response.json();
}