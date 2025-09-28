import {Component, Input} from '@angular/core';
import {Character} from '../Shared/Models/character';

@Component({
  selector: 'app-character-list-item',
  imports: [],
  templateUrl: './character-list-item.component.html',
  styleUrl: './character-list-item.component.css'
})
export class CharacterListItemComponent {
  @Input() character?:Character;
}
