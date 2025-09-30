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
  // initialize array with instances of character object
  characterList: Character[] =
    [
      {name: "Tsukasa Kadoya", gender: "Male", riderName: "Kamen Rider Decade", type: "Primary", motif: "Cards, Barcode", isARider: true, imageName: "TsukasaKadoya"},
      {name: "Shotaro Hidari", gender: "Male", riderName: "Kamen Rider Double", type: "Primary", motif: "Grasshopper, Wind, Joker", isARider: true, imageName: "ShotaroHidari"},
      {name: "Philip", gender: "Male", riderName: "Kamen Rider Double", type: "Primary", motif: "Grasshopper, Wind, Joker", isARider: true, imageName: "Philip"},
      {name: "Eiji Hino", age: 21, gender: "Male", riderName: "Kamen Rider OOO", type: "Primary", motif: "Hawk, Tiger, Grasshopper", isARider: true, imageName: "EijiHino"},
      {name: "Yusuke Godai", age: 25, gender: "Male", riderName: "Kamen Rider Kuuga", type: "Primary", motif: "Stag beetle", isARider: true, imageName: "YusukeGodai"},
      {name: "Takumi Inui", age: 18, gender: "Male", riderName: "Kamen Rider Faiz", type: "Primary", motif: "Phi symbol, Shark", isARider: true, imageName: "TakumiInui"},
      {name: "Daiki Kaito", gender: "Male", riderName: "Kamen Rider Diend", type: "Secondary", motif: "Cards, Barcode, Blue Shieldbug", isARider: true, imageName: "DaikiKaito"},
      {name: "Ren Akiyama", age: 24, gender: "Male", riderName: "Kamen Rider Knight", type: "Secondary", motif: "Knight, Bat", isARider: true, imageName: "RenAkiyama"},
      {name: "Ryu Terui", gender: "Male", riderName: "Kamen Rider Accel", type: "Secondary", motif: "Motorcycle", isARider: true, imageName: "RyuTendo"},
      {name: "Masato Kusaka", gender: "Male", riderName: "Kamen Rider Kaixa", type: "Secondary", motif: "Chi symbol, Hornet", isARider: true, imageName: "MasatoKusaka"}
    ]
}
