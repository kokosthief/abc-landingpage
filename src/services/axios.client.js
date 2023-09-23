import axios from "axios";

export class AxiosClient {
  constructor(baseURL, headers) {
    const newHeaders = headers ?? {};
    this.instance = axios.create({
      baseURL,
      headers: newHeaders,
    });
  }

  async get(url, options) {
    try {
      const { data } = await this.instance({
        method: "GET",
        url,
        ...options,
      });
      return data;
    } catch (err) {
      throw {
        message: err.response.data?.message,
        status: err.response.status,
      };
    }
  }

  async post(url, body, options) {
    try {
      const { data } = await this.instance({
        method: "POST",
        url,
        data: body,
        ...options,
      });

      return data;
    } catch (err) {
      throw {
        message: err.response.data?.message,
        status: err.response.status,
      };
    }
  }
}
