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

// 下班下班
const gogogo = async () => {
  const weatherInfo = await getWeatherDetail()
  if (weatherInfo.status === '0') {
    throw '获取天气信息失败'
  }
  const weather = weatherInfo.lives[0].weather
  const logStr = logWeather(weather)
  const isWorkDay = await getIsWorkDay()
  if (isWorkDay) {
    await sendWoaMsgReq(`# 下班啦~\n\n${logStr}\n\n<at user_id=\"-1\">所有人</at>`)
  }
}

// 启动定时任务
const job = new CronJob(
	'0 35 18 * * *', // cronTime （秒 分 时 日 月 星期几）
	gogogo, // onTick
	null, // onComplete
	true, // start
);
job.start()
console.log('启动下班提示系统成功~')