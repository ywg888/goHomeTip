import { getFormattedDate } from "../utils/days.js"

const logWeather = (weather) => {
    const dateStr = getFormattedDate()
    console.log(`日期：${dateStr}，天气：${weather}`)
}

export {
    logWeather,
}