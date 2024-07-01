import { OmdbSearchResultResponse, Movie } from '../types';
export const mapMovieResults = (
  results: OmdbSearchResultResponse[]
): Movie[] => {
  return results.map((result) => {
    return {
      title: unescapeHtml(result.Title),
      year: result.Year,
      poster: result.Poster,
      type: result.Type,
      imdbId: result.imdbID,
    };
  });
};

const unescapeHtml = (html: string) => {
  return html.replace(/&quot;/g, '"');
};
