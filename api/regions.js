export default async function handler(req, res) {
  try {
    const regions = ["ar", "en", "fr", "es", "de", "it"];
    res.status(200).json({
      success: true,
      message: "تم جلب المناطق 🧞",
      data: regions
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "❌ فشل في جلب المناطق 🧞",
      details: err.message
    });
  }
}
