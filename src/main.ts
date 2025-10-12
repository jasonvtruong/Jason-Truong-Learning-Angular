import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {CharacterListComponent} from './app/character-list/character-list.component';
import {CharacterListItemComponent} from './app/character-list-item/character-list-item.component';

const routes: Routes = [
  {path: 'characters', component: CharacterListComponent},
  {path: 'characters/:id', component: CharacterListItemComponent}
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).then(r => console.log("Bootstrap successful"));
