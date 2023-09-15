import axios, { AxiosError } from "axios";

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
      if (err instanceof AxiosError) {
        throw new Error(err.response?.data.message);
      }

      throw err;
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
      if (err instanceof AxiosError) {
        throw new Error(err.response?.data.message);
      }

      throw err;
    }
  }
}
