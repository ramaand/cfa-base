import { Observable } from "rxjs";

export interface BaseRepository<T> {
  getAll(): Observable<T[]>;
  getById(id: number): Observable<T>;
  create(item: T): Observable<any>;
  update(item: T): Observable<any>;
  delete(id: number): Observable<any>;
}