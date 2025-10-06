import {Component, OnInit} from '@angular/core';
import {Character} from '../Shared/Models/character';
import {CharacterService} from '../Services/character.service';
import {NgForOf, NgIf} from '@angular/common';
import {CharacterListItemComponent} from '../character-list-item/character-list-item.component';

@Component({
  selector: 'app-character-list',
  imports: [
    NgForOf,
    NgIf,
    CharacterListItemComponent
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  characterList: Character[] = [];

  constructor(private characterService: CharacterService) {

  }

  ngOnInit() {
    this.characterService.getCharacters().subscribe({
        next: (data: Character[]) => this.characterList = data,
        error: err => console.error("Error fetching Characters",
          err),
        complete: () => console.log("Character data fetch complete!")
      }
    )
  }
}
