import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css',
})
export class FavouritesComponent {
  email!: string;

  submitEmail(data: Event, registerForm: NgForm) {
    console.log(data);
    console.log(registerForm.valid);
  }
}
