import { Observable } from "rxjs";

import { UserDomain } from "@/domain/user.domain";

import { HttpClient } from "@/libs/http/http-client";

interface IUserService {
  url: URL;
  http: HttpClient;

  get(): Observable<UserDomain[]>;
  getById(id: number): Observable<UserDomain>;
  create(user: UserDomain): Observable<any>;
  update(user: UserDomain): Observable<any>;
  delete(id: number): Observable<any>;
}

export abstract class UserService implements IUserService {
  readonly url: URL;
  readonly http: HttpClient;

  constructor(url: URL, http: HttpClient) {
    this.url = url;
    this.http = http;
  }

  abstract get(): Observable<UserDomain[]>;
  abstract getById(id: number): Observable<UserDomain>;
  abstract create(user: UserDomain): Observable<any>;
  abstract update(user: UserDomain): Observable<any>;
  abstract delete(id: number): Observable<any>;
}
