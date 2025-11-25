import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  imports: [CommonModule, RouterLink]
})
export class MoviesComponent implements OnInit {

  currentIndex = 0;

  slides: string[] = [
    'assets/20.jpg',
    'assets/18.jpg',
    'assets/11.jpg'
  ];

  movies = [
    {
      title: 'Spider-Man: Far From Home',
      img: 'assets/spider man far fromhome.jpg',
      category: 'Action',
      duration: '2:03h',
      link: '/spider-man'
    },
    {
      title: 'The Roundup: No Way Out',
      img: 'assets/the punishement.jpg',
      category: 'Action',
      duration: '1:58h',
      link: '/the-roundup'
    },
    {
      title: 'Extraction 2',
      img: 'assets/exaction.jpg',
      category: 'Action',
      duration: '1:57h',
      link: '#'
    }
  ];

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000);
  }
}
