import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { Movie } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule, MovieListComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
})
export class MovieSearchComponent {
  @Input() showSearchOverlay: boolean = false;
  title = 'movie-search';
  searchTerm = '';
  formSubmitted = false;

  constructor(private router: Router) {}

  @Output() handleSearch = new EventEmitter();

  searchForMovies(event: Event, searchForm: NgForm) {
    this.formSubmitted = true;
    event?.preventDefault();
    if (searchForm.valid) {
      this.handleSearch.emit();
      this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
    }
  }
}
