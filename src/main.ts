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
  {path: 'characters', component: CharacterListComponent},
  {path: 'characters/:id', component: CharacterListItemComponent},
  {path: 'modify-character', component: ModifyCharacterComponent},
  {path: 'modify-character/:id', component: ModifyCharacterComponent},
  {path: '**', component: PageNotFoundComponent} // Wildcard route
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1})) // import providers dynamically
  ]
}).then(r => console.log("Bootstrap successful")).catch((err) => console.error(err));
