import { Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { MovieComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MyListComponent } from './my-list/my-list.component';

export const routes: Routes = [
  {
    path: 'favourites',
    component: FavouritesComponent,
  },
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'search', component: MoviesComponent },
  { path: 'my-list', component: MyListComponent },
  {
    path: 'carcass/movie',
    loadComponent: () => import('./movie-details/movie-details.component').then((c) => c.MovieComponent),
  },
];
