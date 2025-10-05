import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Character} from '../Shared/Models/character';
import {characterList} from '../data/mock-character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  // method to return Observable of character array
  getCharacters(): Observable<Character[]>{
    return of(characterList);
  }
}
