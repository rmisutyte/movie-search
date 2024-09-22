import { Component } from '@angular/core';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MovieSearchComponent, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isSearchOverlayVisible = false;

  showSearchOverlay() {
    this.isSearchOverlayVisible = !this.isSearchOverlayVisible;
  }

  onSearch() {
    this.isSearchOverlayVisible = false;
  }
}
