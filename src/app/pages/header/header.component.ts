import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class headerComponent {

  constructor(private router: Router) {}

  searchMovies(event: any) {
    const query = event.target.value.trim();

    if (!query) return;

    this.router.navigate(['/search'], { queryParams: { q: query } });
  }
}
