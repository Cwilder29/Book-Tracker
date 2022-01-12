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
  ownershipIcon: string;
  hasReadIcon: string;
  nowReadingIcon: string;

  constructor() { }

  ngOnInit(): void {
    if (this.book.ownership) {
      this.ownershipIcon = '../../../assets/green-checkmark.png';
    }
    else {
      this.ownershipIcon = '../../../assets/red-x.png';
    }

    if (this.book.hasRead) {
      this.hasReadIcon = '../../../assets/green-checkmark.png'
    }
    else {
      this.hasReadIcon = '../../../assets/red-x.png'
    }

    if (this.book.nowReading) {
      this.nowReadingIcon = '../../../assets/green-checkmark.png'
    }
    else {
      this.nowReadingIcon = '../../../assets/red-x.png'
    }
  }

  onDelete(book) {
    this.onDeleteBook.emit(book);
  }

}
