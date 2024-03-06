import { Observable } from 'rxjs';

export abstract class HttpClient {
  abstract request<R, O>(options: O): Observable<R>;
  abstract requestWithAuth<R, O>(options: O): Observable<R>;
}
