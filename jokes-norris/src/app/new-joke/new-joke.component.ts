import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke';
import { JokesService } from '../services/jokes.service';
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

  constructor(private jokesService: JokesService) {}

  ngOnInit() {}

  toggleFavoriteJoke() {
    this.jokesService.getNewJoke();
  }
}
