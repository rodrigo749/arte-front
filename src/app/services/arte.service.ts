import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arte } from '../models/arte.model';

//const baseUrl = 'http://localhost:8080/api/artes'
const baseUrl = 'https://arte-api.onrender.com/api/artes';

@Injectable({
  providedIn: 'root',
})
export class ArteService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Arte[]> {
    return this.http.get<Arte[]>(baseUrl);
  }

  get(id: any): Observable<Arte> {
    return this.http.get<Arte>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Arte[]> {
    return this.http.get<Arte[]>(`${baseUrl}?title=${title}`);
  }
}
