import type { AxiosRequestConfig } from "axios";
import axios from "./interceptors.config";

export abstract class APIService {
  protected baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get(url: string, config: AxiosRequestConfig = {}) {
    return axios({
      method: "get",
      url: this.baseURL + url,
      ...config,
    });
  }
}
