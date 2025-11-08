import { Pipe, PipeTransform } from '@angular/core';
import {Character} from '../Shared/Models/character';

@Pipe({
  name: 'genderColour'
})
export class GenderColourPipe implements PipeTransform {

  transform(character: Character): string {
    if(character.gender == "Male"){
      return 'skyblue';
    }
    else if(character.gender == "Female") {
      return 'lightpink';
    }

    return '';
  }

}
