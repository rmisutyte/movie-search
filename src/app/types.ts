export type Movie = {
  title: string;
  year: string;
  type: 'movie';
  poster: string;
  imdbId: string;
};

export type MovieDetails = {
  title: string;
  year: string;
  director: string;
  genre: string;
  poster: string;
  plot: string;
  imdbRating: string;
};

export type OmdbSearchResultResponse = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: 'movie';
  Poster: string;
};

export type OmdbSearchResponse = {
  Search: OmdbSearchResultResponse[];
  totalResults: number;
  Response: 'True' | 'False';
};

export type ObdbMovieResponse = {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
};
