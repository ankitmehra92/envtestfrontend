import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  apiUrl: string = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'text/plain');

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<String>(`${this.apiUrl}/namevar`,{headers:this.headers, responseType: "text" as "json"});
  }
}