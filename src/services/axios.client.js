import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../config/api";
import { VerificationErrorTitleMap } from "../constants/errors";

export class AxiosClient {
  constructor(baseURL, headers) {
    const newHeaders = headers ?? {};
    this.instance = axios.create({
      baseURL,
      headers: newHeaders,
    });

    this.instance.interceptors.request.use(async (config) => {
      const token = Cookies.get("token");
      // const { data } = await axios.get(`${BASE_URL}/generate-token`);
      // const token = data.token;

      if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    this.instance.interceptors.response.use(
      (config) => config,
      async (error) => {
        const originRequest = error.config;

        if (
          ((error.response.status === 400 &&
            error.response?.data?.message ===
              VerificationErrorTitleMap.tokenNotFound) ||
            error.response.status === 401 ||
            error.response.status === 403) &&
          !originRequest._isRetry
        ) {
          originRequest._isRetry = true;

          try {
            const { data } = await axios.get(`${BASE_URL}/generate-token`);
            Cookies.set("token", data.token);
            return await this.instance.request(originRequest);
          } catch (err) {
            if (err.response.status === 400) {
              throw err;
            }

            Cookies.remove("token");
          }
        }

        throw error;
      }
    );
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
      if (err) {
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
      if (err) {
        throw new Error(err.response?.data.message);
      }
      throw err;
    }
  }
}
