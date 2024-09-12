// fetch工具类

class FetchWrapper {
  static async get(url, data = {}) {
    const queryString = new URLSearchParams(data).toString()
    const finalUrl = `${url}?${queryString}`
    const options = { method: "GET" }
    return FetchWrapper.request(finalUrl, options);
  }

  static async post(url, data) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    return FetchWrapper.request(url, options);
  }

  static async request(url, options = {}) {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
}

export default FetchWrapper;
