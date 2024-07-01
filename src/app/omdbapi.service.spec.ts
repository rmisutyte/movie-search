import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { OmdbapiService } from './omdbapi.service';

describe('OmdbapiService', () => {
  let service: OmdbapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(OmdbapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
