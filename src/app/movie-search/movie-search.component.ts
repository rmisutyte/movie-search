import { Component, Output, EventEmitter } from '@angular/core';
import { OmdbapiService } from '../omdbapi.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';

import { Movie } from '../types';
import { mapMovieResults } from './mapMovieResults';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule, MovieListComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
})
export class MovieSearchComponent {
  title = 'movie-search';
  searchTerm = '';
  formSubmitted = false;

  constructor(private omdbapiService: OmdbapiService) {}

  @Output() handleSearch = new EventEmitter<Movie[]>();

  searchForMovies(event: Event, searchForm: NgForm) {
    this.formSubmitted = true;
    event?.preventDefault();
    if (searchForm.valid) {
      this.omdbapiService.searchMovies(this.searchTerm).subscribe((res) => {
        this.handleSearch.emit(mapMovieResults(res.Search).filter((movie) => movie.poster !== 'N/A'));
      });
    }
  }
}
