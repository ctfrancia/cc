import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke';
import { JokesService } from '../services/jokes.service';

@Component({
  selector: 'app-favorites-jokes',
  templateUrl: './favorites-jokes.component.html',
  styleUrls: ['./favorites-jokes.component.css'],
})
export class FavoritesJokesComponent implements OnInit {
  constructor(private jokeService: JokesService) {}

  ngOnInit() {}
}
