import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieComponent {
  movieId!: string;

  @Input()
  set id(value: string) {
    this.movieId = value;
  }
}
