import { HttpClient } from "./http-client";
import { HttpClientAxios } from "./http-client-axios";
import { HttpClientMock } from "./http-client-mock";

export const httpClientMock: HttpClient = new HttpClientMock();
export const httpClientImpl: HttpClient = new HttpClientAxios();