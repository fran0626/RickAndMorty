import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDescriptionComponent } from './character-description/character-description.component';

export const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'characterDescription', component: CharacterDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
