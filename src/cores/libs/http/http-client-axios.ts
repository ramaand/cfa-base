import {
  Axios,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  isCancel,
} from "axios";
import { catchError, defer, from, Observable } from "rxjs";

import { HttpClient } from "./http-client";

export class HttpClientAxios extends HttpClient {
  private static instance: Axios;

  constructor() {
    super();

    if (!HttpClientAxios.instance) {
      HttpClientAxios.instance = new Axios({
        baseURL: "http://localhost:3000",
      });
    }
  }

  request<O = AxiosRequestConfig, R = AxiosResponse<any, any>>(options: O): Observable<R> {
    return defer(() => from(HttpClientAxios.instance.request(options as AxiosRequestConfig))) as Observable<R>;
  }

  requestWithAuth<O = AxiosRequestConfig, R = AxiosResponse<any, any>>(options: O): Observable<R> {
    HttpClientAxios.instance.interceptors.request.use((config) => {
      if (!config.headers.Authorization) {
        throw new AxiosError("Unauthorized, please login first");
      }

      return config;
    });

    return defer(() => from(HttpClientAxios.instance.request(options as AxiosRequestConfig))).pipe(
      catchError((error: AxiosError) => {
        if (isCancel(error)) {
          throw new Error("Unauthorized, please login first");
        }

        throw new Error((error as AxiosError).message);
      })
    ) as Observable<R>;
  }
}
