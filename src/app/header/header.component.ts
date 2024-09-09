import { Component } from '@angular/core';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { RouterLink } from '@angular/router';
import { SearchOverlayComponent } from '../search-overlay/search-overlay.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MovieSearchComponent, RouterLink, SearchOverlayComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isSearchOverlayVisible = false;

  showSearchOverlay() {
    this.isSearchOverlayVisible = !this.isSearchOverlayVisible;
  }
}
