import Request from "./request-service";

class FetchService {
  static getData = (url: string, options = {}) => {
    return Request.getRequest(url, options);
  };
  static postData = (url: string, options = {}, header = {}) => {
    return Request.postRequest(url, options, header);
  };
}

export { FetchService };
