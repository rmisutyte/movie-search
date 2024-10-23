import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { Movie, OmdbSearchResponse } from '../types';
import { OmdbapiService } from '../omdbapi.service';
import { mapMovieResults } from '../movie-search/mapMovieResults';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieSearchComponent, MovieListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  searchTerm: string = '';
  searchSubscription!: Subscription;

  constructor(
    private omdbapiService: OmdbapiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.searchSubscription = this.route.queryParams.subscribe((params: Params): void => {
      this.searchTerm = params['q'];
      this.fetchMovies(this.searchTerm);
    });
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  fetchMovies(searchTerm: string): void {
    this.omdbapiService.searchMovies(searchTerm).subscribe((res: OmdbSearchResponse): void => {
      this.movies = mapMovieResults(res.Search).filter((movie: Movie): boolean => movie.poster !== 'N/A');
    });
  }
}
