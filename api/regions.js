import { regions } from "aki-api";

export default function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "GET only" });
  res.json({ regions });
}
