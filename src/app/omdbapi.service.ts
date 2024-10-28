import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { ObdbMovieResponse, OmdbSearchResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class OmdbapiService {
  private apiUrl: string = 'https://www.omdbapi.com/';
  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string): Observable<OmdbSearchResponse> {
    return this.http.get<OmdbSearchResponse>(this.apiUrl, {
      params: {
        apiKey: environment.OMDB_API_KEY,
        s: searchTerm,
      },
    });
  }

  getMovieById(id: string): Observable<ObdbMovieResponse> {
    return this.http.get<ObdbMovieResponse>(this.apiUrl, {
      params: {
        apiKey: environment.OMDB_API_KEY,
        i: id,
      },
    });
  }
}
