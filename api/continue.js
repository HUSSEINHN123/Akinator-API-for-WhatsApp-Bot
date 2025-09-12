export default async function handler(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: "تم الانتقال للخطوة التالية 🧞"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "❌ فشل في الانتقال للخطوة التالية 🧞",
      details: err.message
    });
  }
}
