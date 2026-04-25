const BASE_URL = import.meta.env.DEV
  ? "https://yasamin-e84.github.io/Digikala-API-Responsive/db.json"
  : "";

export async function getDB() {
  const res = await fetch(`${BASE_URL}/db.json`);
  return res.json();
}