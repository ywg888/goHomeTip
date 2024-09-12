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
    const url = `http://timor.tech/api/holiday/info/${dateStr}`;
    const response = (await request.get) < HolidayResponse > url;
    const data = response.data;
    if (data.code === ServiceStatus.Error) {
      throw new Error("获取节假日信息失败");
    }
    const { type } = data;
    return type.type === HolidayType.WorkDay || type.type === HolidayType.Adjustment;
  } catch (error) {
    return true;
  }
};

export {
    getFormattedDate,
    getIsWorkDay,
}