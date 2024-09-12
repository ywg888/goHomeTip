import { getTodayWeatherUrl, regionCode } from "../../config/weather.js"
import FetchWrapper from "../utils/fetch.js"

const getWeatherDetail = () => {
    const params = {
        city: regionCode,
        key: process.env.GD_KEY,
        extensions: 'base',
    }
    return FetchWrapper.get(getTodayWeatherUrl, params)
}

export {
    getWeatherDetail,
}