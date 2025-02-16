import { Component } from '@angular/core';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MovieSearchComponent, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isSearchOverlayVisible = false;

  constructor(private router: Router) {}

  showSearchOverlay() {
    this.isSearchOverlayVisible = !this.isSearchOverlayVisible;
  }

  onSearch(searchTerm: string) {
    this.isSearchOverlayVisible = false;
    this.router.navigate(['/search'], { queryParams: { q: searchTerm } });
  }
}
