const DB_URL =
  "https://yasamin-e84.github.io/Digikala-API-Responsive/db.json";

export async function getDB() {
  const res = await fetch(DB_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch db.json");
  }

  return res.json();
}