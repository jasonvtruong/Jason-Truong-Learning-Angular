import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Character} from './Shared/Models/character';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgForOf, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jason-Truong-Learning-Angular');
  // declare instances of character object
  character1 : Character = {name: "Tsukasa Kadoya", gender: "Male", riderName: "Decade", type: "Primary", motif: "Cards, Barcode", isARider: true};
  character2 : Character = {name: "Shotaro Hidari", gender: "Male", riderName: "Double", type: "Primary", motif: "Grasshopper, Wind, Joker", isARider: true};
  character3 : Character = {name: "Philip", gender: "Male", riderName: "Double", type: "Primary", motif: "Grasshopper, Wind, Joker", isARider: true};
  character4 : Character = {name: "Eiji Hino", age: 21, gender: "Male", riderName: "OOO", type: "Primary", motif: "Hawk, Tiger, Grasshopper", isARider: true};
  character5 : Character = {name: "Yusuke Godai", age: 25, gender: "Male", riderName: "Kuuga", type: "Primary", motif: "Stag beetle", isARider: true};
  character6 : Character = {name: "Takumi Inui", age: 18, gender: "Male", riderName: "Faiz", type: "Primary", motif: "Phi symbol, Shark", isARider: true};


  // initialize array with instances of character object
  characterList: Character[] =
    [
      this.character1,
      this.character2,
      this.character3,
      this.character4,
      this.character5,
      this.character6,
    ]
}
