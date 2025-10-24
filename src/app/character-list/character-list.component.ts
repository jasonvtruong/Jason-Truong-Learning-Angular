import {Component, OnInit} from '@angular/core';
import {Character} from '../Shared/Models/character';
import {CharacterService} from '../Services/character.service';
import {NgForOf, NgIf} from '@angular/common';
import {CharacterListItemComponent} from '../character-list-item/character-list-item.component';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-character-list',
  imports: [
    NgForOf,
    NgIf,
    CharacterListItemComponent,
    RouterLink
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  characterList: Character[] = [];

  constructor(private characterService: CharacterService, private router: Router) {

  }

  ngOnInit() {
    this.characterService.getCharacters().subscribe({
        next: (data: Character[]) => this.characterList = data,
        error: err => console.error("Error fetching Characters",
          err),
        complete: () => console.log("Character data fetch complete!")
      }
    )


    // CRUD tests for bonus mark
    // create
    this.characterService.addCharacter({id: 31, name: "Supana Kurogane", age: 24, gender: "Male", riderName: "Kamen Rider Valvarad", type: "Tertiary", motif: "Mechanic, Alchemist", isARider: true, imageName: "SupanaKurogane"})

    // retrieve
    // subscribe to retrieve data from character
    this.characterService.getCharacterById(14).subscribe(
      character => {
        if(character != undefined){
              console.log("Their name is " + character.name);
              console.log("And they are " + character.riderName);
            }
            else {
              // print not found if there is no character with given id
              console.log("Not a valid character!")
            }
      }
    );

    // update
    this.characterService.updateCharacter({id: 12, name: "Raito Sonozaki", gender: "Male", riderName: "Kamen Rider Cyclone", type: "Primary", motif: "Grasshopper, Wind", isARider: true, imageName: "RaitoSonozaki"});

    // delete
    // this.characterService.deleteCharacter(6).subscribe(
    //   characterList => {
    //     this.characterList = characterList;
    //   }
    // )
  } // end ngOnInit

  navigateToForm(): void {
    this.router.navigate(['modify-character']);
  }
} // end class
