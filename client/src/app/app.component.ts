import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favourites:any[] = [];
  joke:string;
  constructor(private http: HttpClient){
    this.favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    this.joke;
    this.getJokes =  this.getJokes.bind(this);
  }
  title = 'dicus-coding-challenge';
  getJokes() {
    this.http.get(`http://localhost:3000/jokes`)
    .subscribe((data:any)=>{
      const { joke } =  data.value;
      this.joke = joke;
    })
  };
  addToFavourites(joke:string){
    const newJoke = new Joke(joke, this.favourites.length)
    const index = this.favourites.findIndex(ele => ele.joke === joke);
    const insertJoke = (newJoke:any) => {
      this.favourites.push(newJoke);
      localStorage.setItem('favourites', JSON.stringify(this.favourites) )
    }
    return index === -1 ? insertJoke(newJoke) : null;
  };
  removeFromFavourites(id:number){
    this.favourites = this.favourites.filter(joke => joke.id !== id);
  };
};
