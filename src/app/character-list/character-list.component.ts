import {Component, OnInit} from '@angular/core';
import {Character} from '../Shared/Models/character';
import {CharacterService} from '../Services/character.service';
import {NgForOf, NgIf} from '@angular/common';
import {CharacterListItemComponent} from '../character-list-item/character-list-item.component';
import {Router, RouterLink} from '@angular/router';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';

@Component({
  selector: 'app-character-list',
  imports: [
    NgForOf,
    NgIf,
    CharacterListItemComponent,
    RouterLink,
    HoverHighlightDirective
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  characterList: Character[] = [];
  error: string | null = null; // variable for error message

  constructor(private characterService: CharacterService, private router: Router) {

  }

  ngOnInit() {
    this.characterService.getCharacters().subscribe({
        next: (data: Character[]) => this.characterList = data,
        error: err => {
          this.error = "Error fetching Characters"; // error message
          console.error("Error fetching Characters", err);
        },
        complete: () => console.log("Character data fetch complete!")
      }
    )


    // CRUD tests for bonus mark
  } // end ngOnInit

  onDelete(id:number): void {
    this.characterService.deleteCharacter(id).subscribe(() => this.router.navigate(['/characters']));

    // retrieve the characters again to update changes
    this.characterService.getCharacters().subscribe({
      next: (data: Character[]) => this.characterList = data,
      error: err => {
        this.error = "Error fetching Characters"; // error message
        console.error("Error fetching Characters", err);
      },
      complete: () => console.log("Character data fetch complete!")
      }
    )
  }


} // end class
