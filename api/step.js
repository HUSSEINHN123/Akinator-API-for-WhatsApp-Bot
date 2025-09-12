import axios from "axios";

export default async function handler(req, res) {
  try {
    const { question } = req.query;
    if (!question) throw new Error("يرجى إرسال رقم السؤال أو بيانات الخطوة 🧞");

    res.status(200).json({
      success: true,
      message: `تم الانتقال إلى الخطوة التالية 🧞`,
      data: {
        question,
        info: "يمكنك استخدام answer.js للإجابة على هذا السؤال"
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "❌ فشل في الانتقال للخطوة التالية 🧞",
      details: err.message
    });
  }
}
