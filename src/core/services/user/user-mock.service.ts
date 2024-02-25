import { BehaviorSubject, Observable } from "rxjs";

import { HttpClient } from "@/libs/http/http-client";

import { UserDomain } from "@/entities/user.domain";

import { UserService } from "./user.service";

export class UserServiceMock extends UserService {
  constructor(url: URL, http: HttpClient) {
    super(url, http);
  }

  get(): Observable<UserDomain[]> {
    return new BehaviorSubject([]);
  }
  getById(id: number): Observable<UserDomain> {
    return new BehaviorSubject({} as UserDomain);
  }
  create(user: UserDomain): Observable<any> {
    return new BehaviorSubject({});
  }
  update(user: UserDomain): Observable<any> {
    return new BehaviorSubject({});
  }
  delete(id: number): Observable<any> {
    return new BehaviorSubject({});
  }
}
