import Aki from "aki-api";
import axios from "axios";

export default async function handler(req, res) {
  try {
    // إعداد البروكسي
    const proxy = "http://134.199.192.31:1337"; // اختر أي بروكسي من قائمتك
    const instance = axios.create({ 
      proxy: {
        host: proxy.split(":")[1].replace("//", ""),
        port: parseInt(proxy.split(":")[2])
      },
      timeout: 10000
    });

    // إنشاء جلسة Akinator مع البروكسي
    const aki = new Aki("ar", instance);

    await aki.start();
    res.status(200).json({
      success: true,
      message: "تم بدء اللعبة 🧞",
      question: aki.question
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "❌ حدث خطأ أثناء بدء اللعبة 🧞",
      details: err.message
    });
  }
}
