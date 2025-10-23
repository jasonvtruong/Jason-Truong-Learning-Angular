import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Character} from '../Shared/Models/character';
import {characterList} from '../data/mock-character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters: Character[] = characterList; // for crud
  constructor() {}

  // method to return Observable of character array
  getCharacters(): Observable<Character[]>{
    return of(this.characters);
  }

  // create a new character
  addCharacter(newCharacter:Character): Observable<Character[]>{
    this.characters.push(newCharacter);
    return of(this.characters);
  }

  // retrieve a character
  getCharacterById(characterId:number): Observable<Character | undefined>{
    const character = this.characters.find(character => character.id === characterId);
    return of(character);
  }

  // update a character
  updateCharacter(updatedCharacter:Character): Observable<Character[]>{
    const index = this.characters.findIndex(character => character.id === updatedCharacter.id);
    if(index !== -1){
      this.characters[index] = updatedCharacter;
    }
    return of(this.characters);
  }

  // delete a character
  deleteCharacter(characterId:number): Observable<Character[]>{
    this.characters = this.characters.filter(character => character.id !== characterId);
    return of(this.characters);
  }
}
