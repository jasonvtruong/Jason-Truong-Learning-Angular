import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../Services/character.service';
import {Character} from '../Shared/Models/character';

@Component({
  selector: 'app-modify-character',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-character.component.html',
  styleUrl: './modify-character.component.css'
})
export class ModifyCharacterComponent implements OnInit {
  characterForm: FormGroup;
  character: Character | undefined;

  constructor (
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router
  ) {
    this.characterForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', Validators.pattern("\\d{2}")],
      gender: [''],
      riderName: ['', Validators.maxLength(20)],
      type: [''],
      motif: [''],
      isARider: [true],
      imageName: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.characterService.getCharacterById(+id).subscribe(character => {
        if(character){
          this.character = character;
          this.characterForm.patchValue(character);
        }
      });
    }
  }

  onSubmit(): void {
    const character: Character = this.characterForm.value;

    // check if updating an existing character
    if(character.id){
      this.characterService.updateCharacter(character);
    }
    else {
      // add new student, generate a new ID
      character.id = this.characterService.generateNewId();
      this.characterService.addCharacter(character);
    }

    this.router.navigate(['/characters']);
  }
}
