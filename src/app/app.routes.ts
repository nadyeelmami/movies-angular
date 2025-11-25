// app.routes.ts
import { Routes } from '@angular/router';
import { ProjetComponent } from './pages/projet/projet.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { MostComponent } from './pages/most/most.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SpiderManComponent } from './pages/spider-man/spider-man.component';
import { TheRoundupComponent } from './pages/the-roundup/the-roundup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProjetComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-show', component: TvShowComponent },
  { path: 'most', component: MostComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'spider-man', component: SpiderManComponent },
  { path: 'the-roundup', component: TheRoundupComponent },
  { path: '**', redirectTo: '/home' }
];
