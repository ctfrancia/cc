import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  constructor(private http: HttpClient) {}

  getNewJoke() {
    const newJoke = this.http.get<Joke>('http://api.icndb.com/jokes/random');
    console.log(newJoke);
    return newJoke;
  }
}
