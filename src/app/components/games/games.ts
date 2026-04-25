import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from '../../services/games.service';

interface GameDisplay {
  id: number;
  name: string;
  genre: string;
  rating: number;
  image: string;
  price: string;
}

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class GamesComponent implements OnInit {
  games: GameDisplay[] = [];

  selectedFilter = 'Todos';
  filters = ['Todos', 'Acción', 'RPG', 'Sandbox', 'Lucha'];

  constructor(private gamesService: GamesService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadGames();
  }

  loadGames() {
    this.gamesService.getAll().subscribe(data => {
      // Convertir datos del servicio al formato de visualización
      this.games = data.map((game, index) => ({
        id: game.id || 0,
        name: game.title,
        genre: game.genre,
        rating: 4.5, // valor por defecto, puedes agregarlo a la BD
        // Usar imagen del backend si existe, si no usar placeholder funcional
        image: game.image && game.image.trim() ? game.image : `https://picsum.photos/300/400?random=${game.id}`,
        price: '$' + game.price.toFixed(2)
      }));
      this.cdr.detectChanges();
    });
  }

  filterGames() {
    if (this.selectedFilter === 'Todos') {
      return this.games;
    }
    return this.games.filter(game => game.genre === this.selectedFilter);
  }

  onGameClick(gameName: string) {
    alert(`¡Hiciste clic en ${gameName}! Próximamente disponible en tu biblioteca.`);
  }
}
