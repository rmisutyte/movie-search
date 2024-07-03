import { Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { MovieComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
  {
    path: 'favourites',
    component: FavouritesComponent,
  },
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'search', component: MoviesComponent },
];
