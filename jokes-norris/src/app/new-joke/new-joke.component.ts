import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke';
import { JokesService } from '../services/jokes.service';
@Component({
  selector: 'app-new-joke',
  templateUrl: './new-joke.component.html',
  styleUrls: ['./new-joke.component.css'],
})
export class NewJokeComponent implements OnInit {
  newJoke: Joke;

  constructor(private jokesService: JokesService) {}

  ngOnInit() {}

  getJoke(): void {
    this.jokesService.getNewJoke().subscribe(joke => {
      this.newJoke = joke;
    });
  }
}
