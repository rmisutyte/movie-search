import {
  Component,
  Output,
  EventEmitter,
  Input,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [NgIf, CommonModule, MovieListComponent, ReactiveFormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSearchComponent implements OnChanges {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @Input() showSearchOverlay: boolean = false;
  @Output() search = new EventEmitter<string>();

  searchForm: FormGroup;
  title = 'movie-search';

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes');
    if (changes['showSearchOverlay'] && changes['showSearchOverlay'].currentValue) {
      setTimeout(() => this.focusInput());
    }
  }

  private focusInput() {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const term = this.searchForm.get('searchTerm')?.value;
      this.search.emit(term);
    }
  }
}
