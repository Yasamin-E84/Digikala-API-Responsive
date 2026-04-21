const BASE_URL = import.meta.env.DEV
  ? "http://localhost:5173"
  : "";

export async function getDB() {
  const res = await fetch(`${BASE_URL}/db.json`);
  return res.json();
}