import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../Services/character.service';
import {Character} from '../Shared/Models/character';
import {NgIf} from '@angular/common';
import {HighlightOnFocusDirective} from '../directives/highlight-on-focus.directive';
import {MatFormField, MatHint, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButton} from '@angular/material/button';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-modify-character',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    NgIf,
    HighlightOnFocusDirective,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatSelect,
    MatOption,
    MatCheckbox,
    MatButton,
    MatDatepickerInput,
    MatDatepicker,
    MatHint,
    MatDatepickerToggle,
    MatSuffix,
    MatTooltip
  ],
  templateUrl: './modify-character.component.html',
  styleUrl: './modify-character.component.css'
})
export class ModifyCharacterComponent implements OnInit {
  characterForm: FormGroup;
  character: Character | undefined;
  error: string | null = null;

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
      finisherMove: [''],
      debutDate: [''],
      isARider: [true],
      imageName: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.characterService.getCharacterById(+id).subscribe( {
        next: character => {
          if(character){
            this.character = character;
            this.characterForm.patchValue(character);
          }
        },
        error: err => {
          this.error = "Error fetching character";
          console.error("Error fetching student:", err);
        }

      });
    }
  }

  onSubmit(): void {
    const character: Character = this.characterForm.value;

    // check if updating an existing character
    if(character.id){
      this.characterService.updateCharacter(character).subscribe(() => this.router.navigate(['/characters']));
    }
    else {
      // add new student
      this.characterService.addCharacter(character).subscribe(() => this.router.navigate(['/characters']));
    }

    this.router.navigate(['/characters']);
  }
}
