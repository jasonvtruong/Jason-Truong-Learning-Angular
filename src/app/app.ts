import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Character} from './Shared/Models/character';
import {NgForOf, NgIf} from '@angular/common';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterListItemComponent} from './character-list-item/character-list-item.component';
import {characterList} from './data/mock-character';
import {CharacterService} from './Services/character.service';
import { NgOptimizedImage } from '@angular/common';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [NgForOf, NgIf, CharacterListComponent, CharacterListItemComponent, RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, MatToolbar, MatButton, MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jason-Truong-Learning-Angular');


  // inject dependency by declaring it in constructor
  constructor(private characterService: CharacterService) {}

}
