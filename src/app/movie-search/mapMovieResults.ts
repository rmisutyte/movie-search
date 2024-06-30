import { OmdbSearchResultResponse, Movie } from '../types';
export const mapMovieResults = (
  results: OmdbSearchResultResponse[]
): Movie[] => {
  return results.map((result) => {
    return {
      title: result.Title,
      year: result.Year,
      poster: result.Poster,
      type: result.Type,
    };
  });
};
