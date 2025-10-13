import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../Shared/Models/character';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.characterService.getCharacterById(Number(id)).subscribe(character => {
        this.character = character;
      })
    }
  }
}
