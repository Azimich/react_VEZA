const headers = new Headers();
headers.append("Content-Type", "application/json");

class Request {
  static getRequest = async (url: string, options: {}) => {
    return await fetch(url, options)
      .then((res) => res.json())
      .catch((error) => {
        return { error: 1, msg: error, response: [] };
      });
  };

  static postRequest = async (url: string, options: {}, header: {}) => {
    return await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: header ? header : headers,
      body: JSON.stringify(options),
    })
      .then((res) => res.json())
      .catch(() => {
        return { error: 1, response: [] };
      });
  };
}

export default Request;
