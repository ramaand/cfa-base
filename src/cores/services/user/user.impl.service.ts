import { AxiosResponse } from "axios";
import { map, Observable } from "rxjs";

import { UserDomain } from "@/cores/entities/domains/user.domain";
import { HttpClient } from "@/cores/libs/http/http-client";

import { UserService } from "./user.service";

const axiosMapper = (res: unknown) => (res as AxiosResponse).data;

export class UserServiceImpl extends UserService {
  constructor(url: string, http: HttpClient) {
    super(url, http);
  }

  get(): Observable<UserDomain[]> {
    return this.http
      .request({
        url: this.url,
        method: "GET",
      })
      .pipe(map(axiosMapper));
  }

  getById(id: number): Observable<UserDomain> {
    return this.http
      .requestWithAuth({
        url: `${this.url}/${id}`,
        method: "GET",
      })
      .pipe(map(axiosMapper));
  }

  create(user: UserDomain): Observable<any> {
    return this.http
      .requestWithAuth({
        url: this.url,
        method: "POST",
        data: user,
      })
      .pipe(map(axiosMapper));
  }

  update(user: UserDomain): Observable<any> {
    return this.http
      .requestWithAuth({
        url: `${this.url}/${user.id}`,
        method: "PUT",
        data: user,
      })
      .pipe(map(axiosMapper));
  }

  delete(id: number): Observable<any> {
    return this.http
      .requestWithAuth({
        url: `${this.url}/${id}`,
        method: "DELETE",
      })
      .pipe(map(axiosMapper));
  }
}

