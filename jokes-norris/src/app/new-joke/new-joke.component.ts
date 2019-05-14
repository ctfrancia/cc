import { Component, OnInit } from '@angular/core';
import { Joke } from '../Joke';
@Component({
  selector: 'app-new-joke',
  templateUrl: './new-joke.component.html',
  styleUrls: ['./new-joke.component.css'],
})
export class NewJokeComponent implements OnInit {
  joke: Joke = {
    id: 23,
    joke: 'Chuck Norris is the reason why Waldo is hiding',
    categories: [],
  };

  constructor() {}

  ngOnInit() {}
}
