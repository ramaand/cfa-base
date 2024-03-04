import { AxiosRequestConfig } from "axios";
import { Observable } from "rxjs";

import { HttpClient } from "./http-client";

export class HttpClientMock extends HttpClient {
  request<R = any, O = AxiosRequestConfig>(options: O): Observable<R> {
    throw new Error("Method not implemented.");
  }

  requestWithAuth<R = any, O = AxiosRequestConfig>(options: O): Observable<R> {
    throw new Error("Method not implemented.");
  }
}
