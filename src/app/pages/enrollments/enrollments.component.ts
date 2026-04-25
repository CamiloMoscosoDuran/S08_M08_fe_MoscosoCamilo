import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Game, GamesService } from '../../services/games.service';

@Component({
  selector: 'app-enrollments',
  standalone: false,
  styleUrl: './enrollments.component.css',
  templateUrl: './enrollments.component.html'
})
export class EnrollmentsComponent implements OnInit {
  games: Game[] = [];
  game: Game = { title: '', genre: '', releaseDate: '', price: 0, image: '', rating: 0 };
  editMode = false;

  constructor(private service: GamesService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(data => {
      this.games = data;
      this.cdr.detectChanges();
    });
  }

  save() {
    if (this.editMode) {
      this.service.update(this.game.id!, this.game)
        .subscribe(() => this.load());
      this.editMode = false;
    } else {
      this.service.create(this.game)
        .subscribe(() => this.load());
    }

    this.game = { title: '', genre: '', releaseDate: '', price: 0, image: '', rating: 0 };
  }

  edit(g: Game) {
    this.game = { ...g };
    this.editMode = true;
  }

  delete(id: number) {
    this.service.delete(id)
      .subscribe(() => this.load());
  }
}
