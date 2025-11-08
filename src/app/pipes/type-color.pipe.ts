import { Pipe, PipeTransform } from '@angular/core';
import {Character} from '../Shared/Models/character';

@Pipe({
  name: 'typeColor'
})
export class TypeColorPipe implements PipeTransform {

  transform(character: Character): string {
    const type = character.type;

    if(type == "Primary"){
      return `🔴 ${type}`;
    }
    else if(type == "Secondary"){
      return `🔵 ${type}`;
    }
    else if(type == "Tertiary"){
      return `🟢 ${type}`;
    }

    return character.type;
  }

}
