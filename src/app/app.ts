import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Character} from './Shared/Models/character';
import {NgForOf, NgIf} from '@angular/common';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterListItemComponent} from './character-list-item/character-list-item.component';
import {characterList} from './data/mock-character';
import {CharacterService} from './Services/character.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgForOf, NgIf, CharacterListComponent, CharacterListItemComponent, RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jason-Truong-Learning-Angular');


  // inject dependency by declaring it in constructor
  constructor(private characterService: CharacterService) {}


  // create character object to populate the content-list item
  public newCharacter: Character | undefined;

  //Set up the ngonit to listen for a getCharacterbyId
  ngOnInit(){
    this.characterService.getCharacterById(6).subscribe(character =>{
      //Save it in var
      this.newCharacter = character;
    })
  }

  //Call that var in the propety binding in the html

}
