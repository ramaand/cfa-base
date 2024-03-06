import { Observable } from 'rxjs';

import { UserDomain } from '@/cores/entities/domains/user.domain';
import { HttpClient } from '@/cores/libs/http/http-client';

interface IUserService {
  url: string;
  http: HttpClient;

  get(): Observable<UserDomain[]>;
  getById(id: number): Observable<UserDomain>;
  create(user: UserDomain): Observable<any>;
  update(user: UserDomain): Observable<any>;
  delete(id: number): Observable<any>;
}

export abstract class UserService implements IUserService {
  readonly url: string;
  readonly http: HttpClient;

  constructor(url: string, http: HttpClient) {
    this.url = url;
    this.http = http;
  }

  abstract get(): Observable<UserDomain[]>;
  abstract getById(id: number): Observable<UserDomain>;
  abstract create(user: UserDomain): Observable<any>;
  abstract update(user: UserDomain): Observable<any>;
  abstract delete(id: number): Observable<any>;
}
