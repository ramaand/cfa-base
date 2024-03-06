import { BehaviorSubject, Observable } from 'rxjs';

import { UserDomain } from '@/cores/entities/domains/user.domain';
import { HttpClient } from '@/cores/libs/http/http-client';

import { UserService } from './user.service';

export class UserServiceMock extends UserService {
  constructor(url: string, http: HttpClient) {
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
