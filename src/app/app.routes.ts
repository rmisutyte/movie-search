import { Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
  {
    path: 'favourites',
    component: FavouritesComponent,
  },
  { path: '', component: MoviesComponent },
];
