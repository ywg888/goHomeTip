import FetchWrapper from "../utils/fetch.js";

const getHolidayInfo = (dateStr) => {
    const url = `http://timor.tech/api/holiday/info/${dateStr}`;
    return FetchWrapper.get(url)
}

export {
    getHolidayInfo,
}