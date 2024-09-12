import FetchWrapper from "../utils/fetch.js";

const sendWoaMsgReq = (msg) => {
  const data = {
    msgtype: "markdown",
    markdown: { text: msg },
  };
  return FetchWrapper.post(process.env.WOA_WEBHOOK_URL, data);
};

export {
    sendWoaMsgReq,
}