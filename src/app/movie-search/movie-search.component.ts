import {
  Component,
  Output,
  EventEmitter,
  Input,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-search',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSearchComponent implements OnChanges {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @Input() showSearchOverlay: boolean = false;
  @Output() search = new EventEmitter<string>();

  searchForm: FormGroup;
  title = 'movie-search'; // Remove unused variable

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['showSearchOverlay'] && changes['showSearchOverlay'].currentValue) {
      setTimeout(() => this.focusInput());
    }
  }

  private focusInput(): void {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      const term = this.searchForm.get('searchTerm')?.value;
      this.searchForm.controls['searchTerm'].reset();
      this.search.emit(term);
    }
  }
}
