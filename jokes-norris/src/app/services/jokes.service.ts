import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../models/joke';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  constructor(private http: HttpClient) {}

  private readonly _favorites = new BehaviorSubject<Joke[]>([]);

  readonly favorites$ = this._favorites.asObservable();

  get favorites(): Joke[] {
    return this._favorites.getValue();
  }

  set favorites(joke: Joke[]) {
    this._favorites.next(joke);
  }

  addFavorite(joke: Joke) {
    this.favorites = [...this.favorites, joke];
  }

  removeFavorite(id: number) {
    this.favorites = this.favorites.filter(joke => joke.value.id !== id);
  }

  checkFavorites(joke: Joke): boolean {
    return this.favorites.includes(joke);
  }

  getNewJoke() {
    return this.http.get<Joke>('http://api.icndb.com/jokes/random');
  }
}
