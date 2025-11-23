import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Character} from '../Shared/Models/character';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {characters: Character[]} {
    const characters: Character[] =
      [
        {id: 1, name: "Yusuke Godai", age: 25, gender: "Male", riderName: "Kamen Rider Kuuga", type: "Primary", motif: "Stag beetle", finisherMove: "Growing Kick", debutDate: '2000-01-30T10:00:00', isARider: true, imageName: "YusukeGodai"},
        {id: 2, name: "Ren Akiyama", age: 24, gender: "Male", riderName: "Kamen Rider Knight", type: "Secondary", motif: "Knight, Bat", finisherMove: "Final Vent", debutDate: '2002-02-03T10:00:00', isARider: true, imageName: "RenAkiyama"},
        {id: 3, name: "Takumi Inui", age: 18, gender: "Male", riderName: "Kamen Rider Faiz", type: "Primary", motif: "Phi symbol, Shark", finisherMove: "Exceed Charge", debutDate: '2003-01-26T10:00:00', isARider: true, imageName: "TakumiInui"},
        {id: 4, name: "Masato Kusaka", gender: "Male", riderName: "Kamen Rider Kaixa", type: "Secondary", motif: "Chi symbol, Hornet", finisherMove: "Exceed Charge", debutDate: '2003-04-20T10:00:00', isARider: true, imageName: "MasatoKusaka"},
        {id: 5, name: "Soji Tendo", age: 20, gender: "Male", riderName: "Kamen Rider Kabuto", type: "Primary", motif: "Japanese rhinoceros beetle", finisherMove: "Rider Kick", debutDate: "2006-01-29T10:00:00", isARider: true, imageName: "SojiTendo"},
        {id: 6, name: "Tsukasa Kadoya", gender: "Male", riderName: "Kamen Rider Decade", type: "Primary", motif: "Cards, Barcode", finisherMove: "Final Attack Ride", debutDate: '2009-01-25T10:00:00', isARider: true, imageName: "TsukasaKadoya"},
        {id: 7, name: "Daiki Kaito", gender: "Male", riderName: "Kamen Rider Diend", type: "Secondary", motif: "Cards, Barcode, Blue Shieldbug", finisherMove: "Final Attack Ride", debutDate: '2009-03-29T10:00:00', isARider: true, imageName: "DaikiKaito"},
        {id: 8, name: "Shotaro Hidari & Philip", gender: "Male", riderName: "Kamen Rider Double", type: "Primary", motif: "Grasshopper, Wind, Joker", finisherMove: "Maximum Drive", debutDate: '2009-09-06T10:00:00', isARider: true, imageName: "ShotaroPhilip"},
        {id: 9, name: "Ryu Terui", gender: "Male", riderName: "Kamen Rider Accel", type: "Secondary", motif: "Motorcycle", finisherMove: "Maximum Drive", debutDate: '2010-01-17T10:00:00', isARider: true, imageName: "RyuTendo"},
        {id: 10, name: "Eiji Hino", age: 21, gender: "Male", riderName: "Kamen Rider OOO", type: "Primary", motif: "Hawk, Tiger, Grasshopper", finisherMove: "Scanning Charge", debutDate: '2010-09-05T10:00:00', isARider: true, imageName: "EijiHino"},
        {id: 11, name: "Sento Kiryu", age: 26, gender: "Male", riderName: "Kamen Rider Build", type: "Primary", motif: "Rabbit, Tank", finisherMove: "Vortex Finish", debutDate: "2017-09-03T10:00:00", isARider: true, imageName: "SentoKiryu"}
      ];
    return {characters};
  }
}
