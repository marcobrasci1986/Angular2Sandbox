import {Component, OnInit, Input} from '@angular/core';
import {Character} from "../character";

@Component({
  selector: 'selected-character',
  templateUrl: './selected-character.component.html',
  styleUrls: ['./selected-character.component.css']
})
export class SelectedCharacterComponent implements OnInit {

  @Input() character:Character;
  
  constructor() { }

  ngOnInit() {
  }

}
