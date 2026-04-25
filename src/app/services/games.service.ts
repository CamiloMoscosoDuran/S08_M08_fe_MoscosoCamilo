import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
  id?: number;
  title: string;
  genre: string;
  releaseDate: string;
  price: number;
  image?: string;        // NUEVO
  rating?: number;       // NUEVO
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiUrl = 'http://localhost:8081/games';
  constructor(private http: HttpClient) { }

  //GET - listar
  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  //POST - crear
  create(game: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, game);
  }

  //PUT - actualizar
  update(id: number, game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.apiUrl}/${id}`, game);
  }

  //DELETE - eliminar
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
