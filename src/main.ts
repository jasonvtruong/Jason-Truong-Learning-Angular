import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {CharacterListComponent} from './app/character-list/character-list.component';
import {CharacterListItemComponent} from './app/character-list-item/character-list-item.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {ModifyCharacterComponent} from './app/modify-character/modify-character.component';

const routes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters', component: CharacterListComponent},
  {path: 'characters/:id', component: CharacterListItemComponent},
  {path: 'modify-character', component: ModifyCharacterComponent},
  {path: '**', component: PageNotFoundComponent} // Wildcard route
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).then(r => console.log("Bootstrap successful"));
