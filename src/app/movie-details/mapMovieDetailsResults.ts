import { MovieDetails, ObdbMovieResponse } from '../types';

export const mapMovieDetailsResults = (movie: ObdbMovieResponse): MovieDetails => {
  return {
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
    director: movie.Director,
    genre: movie.Genre,
    plot: movie.Plot,
    imdbRating: movie.imdbRating,
  };
};
