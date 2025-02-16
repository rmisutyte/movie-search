import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../types';

@Component({
    selector: 'app-movie-card',
    imports: [RouterLink],
    templateUrl: './movie-card.component.html',
    styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie!: Movie;
}
