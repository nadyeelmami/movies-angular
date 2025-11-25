import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './pages/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, headerComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'movies';  
}
