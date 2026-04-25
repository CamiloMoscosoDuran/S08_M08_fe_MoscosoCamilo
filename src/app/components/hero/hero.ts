import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  onExploreClick() {
    const gamesSection = document.getElementById('games');
    gamesSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
