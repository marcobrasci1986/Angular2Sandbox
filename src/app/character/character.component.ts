import {Component, OnInit} from "@angular/core";
import {Character} from "./character";
import {CharacterService} from "./character.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {


  title:string = "Character page";
  characters:Array<Character>;
  selectedCharacter:Character;

  constructor(private characterService:CharacterService) {
  }


  ngOnInit():void {
    this.characters = this.characterService.getCharacters();
  }

  select(character:Character) {
    this.selectedCharacter = character;
  }

}
