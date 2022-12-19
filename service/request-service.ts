/*const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("accept", "text/plain");
headers.append("Access-Control-Allow-Origin", "*");*/

import { headers } from "utils/bootstrap";
import { IResponse } from "../types/response";

class Request {
  static getRequest = async (url: string, options = {}) => {
    return await fetch(url, options)
      .then((res) => res.json())
      .catch((): IResponse => {
        return {
          errorMessage: "",
          hasError: true,
          customErrorCode: 0,
          systemErrorMessage: "",
          response: [],
        };
      });
  };

  static postRequest = async (url: string, options = {}, header = {}) => {
    return await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: header ? header : headers,
      body: JSON.stringify(options),
    })
      .then((res) => res.json())
      .catch((): IResponse => {
        return {
          errorMessage: "",
          hasError: true,
          customErrorCode: 0,
          systemErrorMessage: "",
          response: [],
        };
      });
  };
}

export default Request;
