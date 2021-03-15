import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VillainInMemDataService } from './services/villain-in-mem-data.service';
import { ListVillainsComponent } from './components/list-villains/list-villains.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVillainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // switch that ensures the in-memory-web-api will be used in non-production environments.
    HttpClientModule,
    environment.production ?
      [] : InMemoryWebApiModule.forRoot(VillainInMemDataService, {delay: 1000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
