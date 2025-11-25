import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-most',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './most.component.html',
  styleUrls: ['./most.component.css']
})
export class MostComponent implements OnInit {
  slides: string[] = [
    'assets/x.jpg',
    'assets/l.jpg',
    'assets/16.jpg'
  ];

  currentIndex = 0;

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000);
  }
}
