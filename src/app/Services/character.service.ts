import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Character} from '../Shared/Models/character';
import {characterList} from '../data/mock-character';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'api/characters'; // url to web api
  private characters: Character[] = characterList; // for crud
  constructor(private http: HttpClient) {} // inject HttpClient

  // method to return Observable of character array
  getCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>(this.apiUrl);
  }

  // retrieve a character
  getCharacterById(characterId:number): Observable<Character>{
    return this.http.get<Character>(`${this.apiUrl}/${characterId}`);
  }

  // create a new character
  addCharacter(newCharacter:Character): Observable<Character>{
    newCharacter.id = this.generateNewId();
    return this.http.post<Character>(this.apiUrl, newCharacter);
  }

  // update a character
  updateCharacter(updatedCharacter:Character): Observable<Character | undefined>{
    const url = `${this.apiUrl}/${updatedCharacter.id}`;
    return this.http.put<Character>(url, updatedCharacter);
  }

  // delete a character
  deleteCharacter(characterId:number): Observable<{}> {
    const url = `${this.apiUrl}/${characterId}`;
    return this.http.delete(url);
  }

  generateNewId(): number {
    return this.characters.length > 0 ? Math.max(...this.characters.map(character => character.id)) + 1 : 1;
  }
}
