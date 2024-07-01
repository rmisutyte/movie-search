import { Component, Input } from '@angular/core';
import { Movie } from '../types';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  @Input({ required: true }) movies!: Movie[];
}
