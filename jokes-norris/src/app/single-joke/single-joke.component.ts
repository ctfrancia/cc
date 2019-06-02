import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../models/joke';
import { JokesService } from '../services/jokes.service';

@Component({
  selector: 'app-single-joke',
  templateUrl: './single-joke.component.html',
  styleUrls: ['./single-joke.component.css'],
})
export class SingleJokeComponent implements OnInit {
  @Input() joke: Joke;

  constructor(private jokesService: JokesService) {}

  ngOnInit() {}

  toggleFavoriteJoke(joke: Joke, event: any): void {
    if (event.target.checked) {
      this.jokesService.addFavorite(joke);
    } else {
      this.jokesService.removeFavorite(joke.id);
    }
    this.jokesService.setFavoritesToLocal();
  }

  checkFavorite(joke: Joke): boolean {
    return this.jokesService.checkFavorites(joke);
  }
}
