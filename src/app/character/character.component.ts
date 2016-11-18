import {Component} from "@angular/core";
import {Character} from "./character";
import {CharacterService} from "./character.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {


  title:string = "Character page";
  characters:Array<Character>;

  constructor(private characterService:CharacterService) {
    this.characters = this.characterService.getCharacters();
  }


  select(character:Character) {
    console.log('You selected: ' + character.name);
  }

}
