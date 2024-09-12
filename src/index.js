import { getWeatherDetail } from "./api/weather.js";
import { sendWoaMsgReq } from "./api/woa.js";
import { CronJob } from 'cron';
import { getIsWorkDay } from "./utils/days.js";
import dotenv from "dotenv";
import { logWeather } from "./log/index.js";

// 加载.env文件中的配置变量
dotenv.config();

// 目标是：
// 1. 获取当前天气，看看要不要带伞；（先实现这个）
// 2. 获取接下来几个小时的天气，看看要不要趁着回家。（接口信息中没有，后面再看看要不要换个接口。。。）

const getSay = (weather) => {
  const hasRain = weather.includes('雨')
  return hasRain ? '下雨了，带伞走' : '没下雨，直接走'
}

// 下班下班
const gogogo = async () => {
  const weatherInfo = await getWeatherDetail()
  const weather = weatherInfo.lives[0].weather
  logWeather(weather)
  const say = getSay(weather)
  const isWorkDay = getIsWorkDay()
  if (isWorkDay) {
    await sendWoaMsgReq(`# 下班啦~\n${say}\n<at user_id=\"-1\">所有人</at>`)
  }
}

// 启动定时任务
const job = new CronJob(
	'0 30 18 * * *', // cronTime （秒 分 时 日 月 星期几）
	gogogo, // onTick
	null, // onComplete
	true, // start
);
job.start()
console.log('启动下班提示系统成功~')