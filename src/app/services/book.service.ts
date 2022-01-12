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

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiURL, book, httpOptions);
  } 

  deleteBook(book: Book): Observable<Book> {
    const url = `${this.apiURL}/${book.id}`;
    return this.http.delete<Book>(url);
  }

  updateBook(book: Book): Observable<Book> {
    const url = `${this.apiURL}/${book.id}`;
    return this.http.put<Book>(url, book, httpOptions);
  }
}
