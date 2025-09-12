global.sessions = global.sessions || {};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  try {
    const { userId } = req.body;
    const aki = global.sessions[userId];
    if (!aki) return res.status(404).json({ error: "الجلسة غير موجودة" });

    const guess = await aki.win();

    res.json({
      message: "🔮 Akinator يظن أنك تفكر في:",
      guess
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
