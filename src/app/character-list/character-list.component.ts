import { Component } from '@angular/core';
import {Character} from '../Shared/Models/character';
import {NgForOf, NgIf} from '@angular/common';
import {CharacterListItemComponent} from '../character-list-item/character-list-item.component';

@Component({
  selector: 'app-character-list',
  imports: [
    NgForOf,
    NgIf,
    CharacterListItemComponent
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  // declare instances of character object
  character1 : Character = {name: "Tsukasa Kadoya", gender: "Male", riderName: "Kamen Rider Decade", type: "Primary", motif: "Cards, Barcode", isARider: true, imageName: "TsukasaKadoya"};
  character2 : Character = {name: "Shotaro Hidari", gender: "Male", riderName: "Kamen Rider Double", type: "Primary", motif: "Grasshopper, Wind, Joker", isARider: true, imageName: "ShotaroHidari"};
  character3 : Character = {name: "Philip", gender: "Male", riderName: "Kamen Rider Double", type: "Primary", motif: "Grasshopper, Wind, Joker", isARider: true, imageName: "Philip"};
  character4 : Character = {name: "Eiji Hino", age: 21, gender: "Male", riderName: "Kamen Rider OOO", type: "Primary", motif: "Hawk, Tiger, Grasshopper", isARider: true, imageName: "EijiHino"};
  character5 : Character = {name: "Yusuke Godai", age: 25, gender: "Male", riderName: "Kamen Rider Kuuga", type: "Primary", motif: "Stag beetle", isARider: true, imageName: "YusukeGodai"};
  character6 : Character = {name: "Takumi Inui", age: 18, gender: "Male", riderName: "Kamen Rider Faiz", type: "Primary", motif: "Phi symbol, Shark", isARider: true, imageName: "TakumiInui"};

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


  // initialize a new array with 4 items
  characterList2: Character[] =
    [
      {name: "Daiki Kaito", gender: "Male", riderName: "Kamen Rider Diend", type: "Secondary", motif: "Cards, Barcode, Blue Shieldbug", isARider: true, imageName: "DaikiKaito"},
      {name: "Ren Akiyama", age: 24, gender: "Male", riderName: "Kamen Rider Knight", type: "Secondary", motif: "Knight, Bat", isARider: true, imageName: "RenAkiyama"},
      {name: "Ryu Terui", gender: "Male", riderName: "Kamen Rider Accel", type: "Secondary", motif: "Motorcycle", isARider: true, imageName: "RyuTendo"},
      {name: "Masato Kusaka", gender: "Male", riderName: "Kamen Rider Kaixa", type: "Secondary", motif: "Chi symbol, Hornet", isARider: true, imageName: "MasatoKusaka"}
    ]
}
