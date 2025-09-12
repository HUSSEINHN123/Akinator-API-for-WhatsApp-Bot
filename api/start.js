import axios from "axios";

export default async function handler(req, res) {
  try {
    // رابط صفحة البداية للعبة أكيناتور
    const { data } = await axios.get("https://ar.akinator.com/");

    res.status(200).json({
      success: true,
      message: "تم بدء اللعبة بنجاح 🧞",
      data: {
        gameStatus: "start",
        note: "استخدم ملفات step.js وanswer.js لإكمال اللعبة"
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "❌ حدث خطأ أثناء بدء اللعبة 🧞",
      details: err.message
    });
  }
}
