import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
selector: 'app-projet',
  standalone: true,
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css'],
 

})
export class ProjetComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
