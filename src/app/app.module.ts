import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VillainInMemDataService } from './services/villain-in-mem-data.service';
import { ListVillainsComponent } from './components/list-villains/list-villains.component';
import { CreateVillainComponent } from './components/create-villain/create-villain.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UpdateVillainComponent } from './components/update-villain/update-villain.component';
import { DeleteVillainComponent } from './components/delete-villain/delete-villain.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVillainsComponent,
    CreateVillainComponent,
    UpdateVillainComponent,
    DeleteVillainComponent,
    DialogBoxComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // switch that ensures the in-memory-web-api will be used in non-production environments.
    HttpClientModule,
    environment.production ?
      [] : InMemoryWebApiModule.forRoot(VillainInMemDataService, { delay: 1000 }),
    FormsModule,       // not used
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
