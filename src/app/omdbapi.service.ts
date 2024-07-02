import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class OmdbapiService {
  private apiUrl = 'https://www.omdbapi.com/';
  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {
        apiKey: environment.OMDB_API_KEY,
        s: searchTerm,
      },
    });
  }
}
