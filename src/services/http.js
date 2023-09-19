import { BASE_URL } from "../config/api";
import { AxiosClient } from "./axios.client";

export class HttpClient {
  constructor(Client, baseUrl, headers) {
    this.instance = new Client(baseUrl, headers);
  }

  async get(url, options) {
    return await this.instance.get(url, options);
  }

  async post(url, body, options) {
    return await this.instance.post(url, body, options);
  }
}

export const http = new HttpClient(AxiosClient, BASE_URL);
