import { getFormattedDate } from "../utils/days.js"

const logWeather = (weather) => {
    const dateStr = getFormattedDate()
    const logStr = `日期：${dateStr}\n\n天气：${weather}`
    const printStr = `日期：${dateStr}，天气：${weather}`
    console.log(printStr)
    return logStr
}

export {
    logWeather,
}