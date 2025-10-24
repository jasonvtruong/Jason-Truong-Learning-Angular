import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

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

  constructor (
    private fb: FormBuilder
  ) {
    this.characterForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      age: [''],
      gender: [''],
      riderName: [''],
      type: [''],
      motif: [''],
      isARider: [true],
      imageName: ['']
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {

  }
}
