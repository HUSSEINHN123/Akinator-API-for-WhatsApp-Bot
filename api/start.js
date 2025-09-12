import Aki from "aki-api";
import axios from "axios";

const proxy = "http://134.199.192.31:1337"; // اختر بروكسي من قائمتك
const instance = axios.create({ 
  proxy: {
    host: proxy.split(":")[1].replace("//", ""),
    port: parseInt(proxy.split(":")[2])
  },
  timeout: 10000
});

const aki = new Aki("ar", instance);
