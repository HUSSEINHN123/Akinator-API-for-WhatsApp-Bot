import { Aki } from "aki-api";

global.sessions = global.sessions || {};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  try {
    const { userId, region = "en", childMode = false } = req.body;
    if (!userId) return res.status(400).json({ error: "userId مطلوب" });

    const aki = new Aki({ region, childMode });
    await aki.start();

    global.sessions[userId] = aki;

    res.json({
      message: "✅ بدأت اللعبة",
      question: aki.question,
      answers: aki.answers,
      progress: aki.progress
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
