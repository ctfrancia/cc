import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { NewJokeComponent } from './new-joke/new-joke.component';
import { FavoritesJokesComponent } from './favorites-jokes/favorites-jokes.component';

@NgModule({
  declarations: [AppComponent, NewJokeComponent, FavoritesJokesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [FavoritesJokesComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
