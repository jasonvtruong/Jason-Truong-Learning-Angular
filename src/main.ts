import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {CharacterListComponent} from './app/character-list/character-list.component';
import {CharacterListItemComponent} from './app/character-list-item/character-list-item.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {ModifyCharacterComponent} from './app/modify-character/modify-character.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './app/Services/in-memory-data.service';

const routes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters', component: CharacterListComponent},    // eagerly loaded
  {path: 'characters/:id',
    loadComponent: () =>
      import('./app/character-list-item/character-list-item.component').then(m => m.CharacterListItemComponent)},  // lazy load
  {path: 'modify-character',
    loadComponent: () =>
      import('./app/modify-character/modify-character.component').then(m => m.ModifyCharacterComponent)},
  {path: 'modify-character/:id',
    loadComponent: () =>
      import('./app/modify-character/modify-character.component').then(m => m.ModifyCharacterComponent)},
  {path: '**',  // Wildcard route
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)}
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1})) // import providers dynamically
  ]
}).then(r => console.log("Bootstrap successful")).catch((err) => console.error(err));
