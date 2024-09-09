import { Component } from '@angular/core';
import { MovieSearchComponent } from '../movie-search/movie-search.component';

@Component({
  selector: 'app-search-overlay',
  standalone: true,
  imports: [MovieSearchComponent, MovieSearchComponent],
  templateUrl: './search-overlay.component.html',
  styleUrl: './search-overlay.component.css',
})
export class SearchOverlayComponent {}
