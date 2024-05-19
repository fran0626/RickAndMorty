import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterModel } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<CharacterModel[]> {
    return this.http.get<CharacterModel[]>(this.apiUrl + '/character/?page=' + page);
  }

  getCharacterDescription(id: number): Observable<CharacterModel> {
    return this.http.get<CharacterModel>(this.apiUrl + '/character/' + id);
  }
}
