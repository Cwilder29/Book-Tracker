import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title: string;
  author: string;
  ownership: boolean;
  hasRead: boolean;
  nowReading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
