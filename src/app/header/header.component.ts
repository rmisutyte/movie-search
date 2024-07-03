import { Component } from '@angular/core';
import { MovieSearchComponent } from '../movie-search/movie-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MovieSearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
