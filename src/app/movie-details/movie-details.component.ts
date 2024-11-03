import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { OmdbapiService } from '../omdbapi.service';
import { MovieDetails, ObdbMovieResponse } from '../types';
import { Observable } from 'rxjs';
import { mapMovieDetailsResults } from './mapMovieDetailsResults';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieComponent implements OnInit, OnChanges {
  @Input()
  set id(value: string) {
    this.movieId = value;
  }

  movieId!: string;
  movie$: Observable<ObdbMovieResponse>;
  movie: MovieDetails;

  constructor(private omdbapiService: OmdbapiService) {}

  ngOnInit(): void {
    this.subscribeMovie();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'].currentValue) {
      this.movie$ = this.omdbapiService.getMovieById(this.movieId);
    }
  }

  subscribeMovie() {
    this.movie$.subscribe((movie) => {
      this.movie = mapMovieDetailsResults(movie);
    });
  }
}
