import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] =[
    {
    "name": "Diario de Ana Frank",
    "genre": "Autobiografia",
    "price": 1800,
    "stock": 5,
    "image": "assets/img/frank.png",
    "clearance": false,
   },
   {
    "name": "Crimen y Castigo",
    "genre": "Novela",
    "price": 2500,
    "stock": 3,
    "image": "assets/img/crimen-y-castigo.jpg",
    "clearance": true,
   },
   {
    "name": "Cumbres Borrascosas",
    "genre": "Suspenso",
    "price": 3000,
    "stock": 0,
    "image": "assets/img/cumbres-borrascosas.jpeg",
    "clearance": false,
   }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
