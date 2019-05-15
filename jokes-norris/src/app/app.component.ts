import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesJokesComponent } from './favorites-jokes/favorites-jokes.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jokes-norris';

  constructor(public dialog: MatDialog) {}

  openFavorites(): void {
    const favoritesRef = this.dialog.open(FavoritesJokesComponent, {
      width: '90vw',
    });
  }
}
