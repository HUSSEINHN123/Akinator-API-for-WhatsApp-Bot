export default async function handler(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: "تم الرجوع للسؤال السابق 🧞"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "❌ فشل في الرجوع للسؤال السابق 🧞",
      details: err.message
    });
  }
}
