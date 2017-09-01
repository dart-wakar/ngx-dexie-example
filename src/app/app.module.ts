import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DexieModule} from './classes/dexie.module';
import {DexieConfig} from './classes/dexieConfig';

import {AppRoutingModule} from './app.routing';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

import {IndexedDbService} from './services/indexedDb.service';
//import {DexieService} from './classes/dexie.service';

const config: DexieConfig = {
  databaseName: 'AppDatabase',
  schema: {
            friends: '++id,first_name,last_name',
            teachers: '++id,first_name,last_name'
          }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DexieModule.forRoot(config),
    AppRoutingModule
  ],
  providers: [
    IndexedDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
