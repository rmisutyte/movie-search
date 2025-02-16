import { Component } from '@angular/core';

@Component({
  selector: 'app-my-list',
  imports: [],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss',
})
export class MyListComponent {
  dummyMovieList = [
    {
      title: 'Gaslit',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjgxODBlMmQtNDUxOC00ZTFjLTk2YWUtMTlkZjY5MThhNDQwXkEyXkFqcGc@._V1_SX300.jpg',
      year: '2022',
      director: 'Robbie Pickering',
      genre: 'Biography, Drama, History',
      type: 'series',
    },
    {
      title: 'Kill Bill: Vol. 1',
      poster:
        'https://m.media-amazon.com/images/M/MV5BZmMyYzJlZmYtY2I3NC00NjAyLTkyZWItZjdjZDI1YTYyYTEwXkEyXkFqcGc@._V1_SX300.jpg',
      year: '2003',
      director: 'Quentin Tarantino',
      genre: 'Action, Crime, Thriller',
      type: 'movie',
    },
  ];
}
