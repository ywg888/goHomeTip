import { getHolidayInfo } from "../api/day.js";

const getFormattedDate = () => {
  const today = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
  const formattedDate =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");
  return formattedDate;
};

const getIsWorkDay = async () => {
  try {
    const dateStr = getFormattedDate();
    const response = await getHolidayInfo(dateStr)
    if (response.code === -1) {
      throw new Error("获取节假日信息失败");
    }
    const { type } = response;
    return type.type === 0 || type.type === 3;
  } catch (error) {
    return true;
  }
};

export {
    getFormattedDate,
    getIsWorkDay,
}