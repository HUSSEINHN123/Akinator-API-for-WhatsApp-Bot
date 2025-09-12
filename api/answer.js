import axios from "axios";

export default async function handler(req, res) {
  try {
    const { answer } = req.query;
    if (!answer) throw new Error("يرجى إرسال إجابة 🧞");

    res.status(200).json({
      success: true,
      message: `تم تسجيل إجابتك 🧞`,
      data: { answer }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "❌ فشل في تسجيل الإجابة 🧞",
      details: err.message
    });
  }
}
