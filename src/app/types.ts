export type Movie = {
  title: string;
  year: string;
  type: 'movie';
  poster: string;
};

export type OmdbSearchResultResponse = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: 'movie';
  Poster: string;
};
