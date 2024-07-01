import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { Movie } from './types';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieSearchComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Search for movies';

  constructor() {}
  movies: Movie[] = [];

  setMovieResults(movieResults: Movie[]) {
    this.movies = movieResults;
    console.log(this.movies);
  }
}
