import { Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
  {
    path: 'favourites',
    component: FavouritesComponent,
  },
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
];
