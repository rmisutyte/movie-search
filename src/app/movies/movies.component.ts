import { Component } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { Movie } from '../types';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieSearchComponent, MovieListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  movies: Movie[] = [];

  setMovieResults(movieResults: Movie[]) {
    this.movies = movieResults;
    console.log(this.movies);
  }
}
