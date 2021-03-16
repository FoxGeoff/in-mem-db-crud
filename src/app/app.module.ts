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
import { UpdateVillianComponent } from './components/update-villian/update-villian.component';
import { DeleteVillianComponent } from './components/delete-villian/delete-villian.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVillainsComponent,
    CreateVillainComponent,
    UpdateVillianComponent,
    DeleteVillianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // switch that ensures the in-memory-web-api will be used in non-production environments.
    HttpClientModule,
    environment.production ?
      [] : InMemoryWebApiModule.forRoot(VillainInMemDataService, { delay: 1000 }),
    FormsModule,       // not used
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
