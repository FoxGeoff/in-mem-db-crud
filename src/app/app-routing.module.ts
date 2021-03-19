import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateVillainComponent } from './components/create-villain/create-villain.component';
import { DeleteVillainComponent } from './components/delete-villain/delete-villain.component';
import { ListVillainsComponent } from './components/list-villains/list-villains.component';
import { UpdateVillainComponent } from './components/update-villain/update-villain.component';


const routes: Routes = [
  { path: 'villains', component: ListVillainsComponent, pathMatch: 'full' },
  { path: 'villains/add-villain', component: CreateVillainComponent, pathMatch: 'full' },
  { path: 'villains/edit-villain', component: UpdateVillainComponent, pathMatch: 'full' },
  { path: 'villains/delete-villain', component: DeleteVillainComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'villains', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
