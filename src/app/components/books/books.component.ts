import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => this.books = books);
    console.log(this.books);
    
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book).subscribe(
      () => (this.books = this.books.filter(t => t.id !== book.id))
    );
  }

  addBook(book: Book) {
    this.bookService.addBook(book).subscribe((book) => (this.books.push(book)));
    console.log('Creating new book');
    
  }

}
