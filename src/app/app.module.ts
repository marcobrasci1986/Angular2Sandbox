import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CharacterComponent} from "./character/character.component";
import {CharacterService} from "./character/character.service";
import { SelectedCharacterComponent } from './character/selected-character/selected-character.component';


/**
 * providers -> Services, Pipes ...
 * declarations -> Custom components
 * imports -> External components
 *
 */
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    SelectedCharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'character', component: CharacterComponent},
      {path: '**', component: HomeComponent}
    ]),
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
