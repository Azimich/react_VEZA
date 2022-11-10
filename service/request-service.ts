import { Response } from "next/dist/compiled/@edge-runtime/primitives/fetch";

const headers = new Headers();
headers.append("Content-Type", "application/json");

class Request {
  static getRequest = async (url: string, options: {}) => {
    return await fetch(url, options)
      .then((res) => res.json())
      .catch(() => {
        return { error: 1, response: [] };
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
      .catch((err) => {
        return err.json({ error: 1, response: [], err: err });
      });
  };
}

export default Request;
