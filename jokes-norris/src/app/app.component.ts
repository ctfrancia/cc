import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesJokesComponent } from './favorites-jokes/favorites-jokes.component';
import { JokesService } from './services/jokes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'jokes-norris';

  constructor(public dialog: MatDialog, private jokesService: JokesService) {}

  ngOnInit() {
    this.getFavorites();
  }

  openFavorites(): void {
    this.dialog.open(FavoritesJokesComponent, {
      width: '90vw',
    });
  }

  getFavorites() {
    this.jokesService.getFavoritesFromLocal();
  }
}
