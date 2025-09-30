import {Component, Input} from '@angular/core';
import {Character} from '../Shared/Models/character';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-character-list-item',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './character-list-item.component.html',
  styleUrl: './character-list-item.component.css'
})
export class CharacterListItemComponent {
  @Input() character?:Character;
}
