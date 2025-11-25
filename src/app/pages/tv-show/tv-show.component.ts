import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  slides: string[] = [
    'assets/8.jpg',
    'assets/7.jpg',
    'assets/4.jpg'
  ];

  currentIndex = 0;

  shows: { img: string; title: string }[] = [
    { img: 'assets/1.jpg', title: 'Adolescence' },
    { img: 'assets/2.jpg', title: 'DARK' },
    { img: 'assets/3.jpg', title: 'Euphoria' },
    { img: 'assets/4.jpg', title: 'After Life' },
    { img: 'assets/5.jpg', title: 'House of Cards' },
    { img: 'assets/6.jpg', title: 'The Last of Us' },
    { img: 'assets/7.jpg', title: 'Squid Game' },
    { img: 'assets/8.jpg', title: 'Cargo' },
    { img: 'assets/9.jpg', title: 'The 100' },
    { img: 'assets/10.jpg', title: 'Ghosts' }
    // Ajoute ici d'autres shows si besoin
  ];

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000);
  }
}
