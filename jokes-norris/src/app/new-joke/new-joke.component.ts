import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke';
import { JokesService } from '../services/jokes.service';
@Component({
  selector: 'app-new-joke',
  templateUrl: './new-joke.component.html',
  styleUrls: ['./new-joke.component.css'],
})
export class NewJokeComponent implements OnInit {
  joke: Joke;

  constructor(private jokesService: JokesService) {}

  ngOnInit() {}

  getJoke(): void {
    this.jokesService.getNewJoke().subscribe(joke => {
      this.joke = joke;
    });
  }

  toggleFavoriteJoke(joke: Joke, checked: boolean): void {
    if (checked) {
      this.jokesService.addFavorite(joke);
    } else {
      this.jokesService.removeFavorite(joke.value.id);
    }
  }

  checkFavorite(joke: Joke): boolean {
    return this.jokesService.checkFavorites(joke);
  }
}
