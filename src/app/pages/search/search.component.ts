import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- tous les imports ici
  template: `
    <div class="search-results">
      <input 
        type="text" 
        placeholder="Rechercher un film..."
        [(ngModel)]="query"
      >
      <ul>
        <li *ngFor="let movie of filteredMovies()">{{ movie.title }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';

  movies = [
    { title: 'Spider-Man' },
    { title: 'Iron Man' },
    { title: 'Avengers' },
    { title: 'Batman' },
    { title: 'The Flash' }
  ];

  filteredMovies() {
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}
