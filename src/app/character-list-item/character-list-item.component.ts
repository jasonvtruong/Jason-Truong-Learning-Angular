import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../Shared/Models/character';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../Services/character.service';

@Component({
  selector: 'app-character-list-item',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './character-list-item.component.html',
  styleUrl: './character-list-item.component.css'
})
export class CharacterListItemComponent implements OnInit {
  character: Character | undefined;
  characterList: Character[] = []; // store the list of characters
  currentIndex: number = 0; // to track the current index

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characterList = characters;

      // subscribe to paramMap changes for page changes
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if(id){
          this.currentIndex = this.characterList.findIndex(character => character.id === id);
          this.character = this.characterList[this.currentIndex];
        }
      });
    });
  }
}
