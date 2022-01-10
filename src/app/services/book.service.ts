import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../Book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiURL = 'http://localhost:5000/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {    
    return this.http.get<Book[]>(this.apiURL);
  }
}
