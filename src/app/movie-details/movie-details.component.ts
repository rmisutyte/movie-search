import {
  Component,
  DestroyRef,
  Injector,
  OnChanges,
  OnInit,
  SimpleChanges,
  afterNextRender,
  inject,
} from '@angular/core';
import { Input } from '@angular/core';
import { OmdbapiService } from '../omdbapi.service';
import { MovieDetails, ObdbMovieResponse } from '../types';
import { Observable, takeUntil } from 'rxjs';
import { mapMovieDetailsResults } from './mapMovieDetailsResults';
import { PlatformService } from '../platform-detector.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieComponent implements OnInit, OnChanges {
  @Input() id: string;

  movie$: Observable<ObdbMovieResponse>;
  movie: MovieDetails | null = null;
  private readonly destroyRef = inject(DestroyRef);

  omdbapiService = inject(OmdbapiService);
  platformService = inject(PlatformService);
  injector = inject(Injector);

  ngOnInit(): void {
    if (this.platformService.isBrowser()) {
      this.subscribeMovie();
      afterNextRender(() => {}, { injector: this.injector });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.platformService.isBrowser()) {
      if (changes['id'].currentValue) {
        this.movie$ = this.omdbapiService.getMovieById(this.id);
      }
      afterNextRender(() => {}, { injector: this.injector });
    }
  }

  subscribeMovie() {
    this.movie$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((movie) => {
      this.movie = mapMovieDetailsResults(movie);
    });
  }
}
