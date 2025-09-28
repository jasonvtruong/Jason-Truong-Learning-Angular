import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Character} from './Shared/Models/character';
import {NgForOf, NgIf} from '@angular/common';
import {CharacterListComponent} from './character-list/character-list.component';

@Component({
  selector: 'app-root',
  imports: [NgForOf, NgIf, CharacterListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jason-Truong-Learning-Angular');



}
