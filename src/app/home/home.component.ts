import {Component, OnInit, Optional} from "@angular/core";
import {MdDialog, MdSnackBar, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit():void {
    console.log('Home component: init');
  }

}



