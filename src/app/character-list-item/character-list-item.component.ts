import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../Shared/Models/character';
import {DatePipe, NgForOf, NgIf, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../Services/character.service';
import {TypeColorPipe} from '../pipes/type-color.pipe';

@Component({
  selector: 'app-character-list-item',
  imports: [
    NgForOf,
    NgIf,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    TypeColorPipe
  ],
  templateUrl: './character-list-item.component.html',
  styleUrl: './character-list-item.component.css'
})
export class CharacterListItemComponent implements OnInit {
  @Input() character: Character | undefined;
  characterList: Character[] = []; // store the list of characters
  currentIndex: number = 0; // to track the current index

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    // this.characterService.getCharacters().subscribe(cha`1racters => {
    //   this.characterList = characters;

      this.characterService.getCharacters().subscribe({
        next: (data: Character[]) => {
          this.characterList = data;

          // subscribe to paramMap changes for page changes
          this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id'));
            if(id){
              this.currentIndex = this.characterList.findIndex(character => character.id === id);
              this.character = this.characterList[this.currentIndex];
            }
          });
        },
        error: err => console.error("Error fetching Characters", err),
        complete: () => console.log("Character data fetch complete!")
      });

  }


}
