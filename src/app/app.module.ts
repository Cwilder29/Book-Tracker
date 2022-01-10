import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';

const appRoutes: Routes = [
  {path: '', component: HeaderComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
