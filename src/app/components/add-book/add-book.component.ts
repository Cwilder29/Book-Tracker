import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Book } from '../../Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();
  title: string;
  author: string;
  ownership: boolean = false;
  hasRead: boolean = false;
  nowReading: boolean = false;
  showAddBook: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddBook = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.title) {
      alert('Please add a title!');
      return;
    }

    const newBook = {
      title: this.title,
      author: this.author,
      ownership: this.ownership,
      hasRead: this.hasRead,
      nowReading: this.nowReading
    }

    this.onAddBook.emit(newBook);

    this.title = '';
    this.author = '';
    this.ownership = false;
    this.hasRead = false;
    this.nowReading = false;
  }

}
