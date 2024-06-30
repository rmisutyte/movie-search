import { Component } from '@angular/core';
import { OmdbapiService } from '../omdbapi.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule, MovieListComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
})
export class MovieSearchComponent {
  title = 'movie-search';
  searchTerm: string = '';
  formSubmitted: boolean = false;

  constructor(private omdbapiService: OmdbapiService) {}

  searchForMovies(event: Event, searchForm: NgForm) {
    this.formSubmitted = true;
    event?.preventDefault();
    if (searchForm.valid) {
      this.omdbapiService.searchMovies(this.searchTerm).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
