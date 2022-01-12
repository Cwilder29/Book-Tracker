import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() onDeleteBook: EventEmitter<Book> = new EventEmitter();
  @Output() onUpdateBook: EventEmitter<Book> = new EventEmitter();
  ownershipIcon: string;
  hasReadIcon: string;
  nowReadingIcon: string;

  constructor() { }

  ngOnInit(): void {
    this.ownershipIcon = this.setIcon(this.book.ownership);
    this.hasReadIcon = this.setIcon(this.book.hasRead);
    this.nowReadingIcon = this.setIcon(this.book.nowReading);
  }

  onDelete(book) {
    this.onDeleteBook.emit(book);
  }

  changeOwnership(book: Book) {
    book.ownership = !book.ownership;
    this.ownershipIcon = this.setIcon(book.ownership);
    this.updateBook(book);
  }

  changeHaveRead(book: Book) {
    book.hasRead = !book.hasRead;
    this.hasReadIcon = this.setIcon(book.hasRead);
    this.updateBook(book);

  }

  changeNowReading(book: Book) {
    book.nowReading = !book.nowReading;
    this.nowReadingIcon = this.setIcon(book.nowReading);
    this.updateBook(book);
  }

  private updateBook(book: Book) {
    this.onUpdateBook.emit(book);
  }

  private setIcon(value: boolean): string {
    if (value) {
      return '../../../assets/green-checkmark.png';
    }
    else {
      return '../../../assets/red-x.png';
    }
  }

}
