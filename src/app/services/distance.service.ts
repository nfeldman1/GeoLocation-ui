import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<any> {
    return this.http.get(`${baseUrl}/getPopular`);
  }

  get(src, dest): Observable<any> {
    return this.http.get(`${baseUrl}/getDist/?source=${src}&dest=${dest}`);
  }

}
