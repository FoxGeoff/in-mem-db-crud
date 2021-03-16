import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateVillainComponent } from './components/create-villain/create-villain.component';
import { ListVillainsComponent } from './components/list-villains/list-villains.component';


const routes: Routes = [
  { path: 'villians', component: ListVillainsComponent, pathMatch: 'full' },
  { path: 'villians/add-villain', component: CreateVillainComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'villians', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
