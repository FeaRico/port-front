import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapOlComponent } from './map-ol/map-ol.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { DocksComponent } from './docks/docks.component';
import { ShipsComponent } from './ships/ships.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ShipAddComponent } from './ships/ship-add/ship-add.component';
import { ShipEditComponent } from './ships/ship-edit/ship-edit.component';
import { DockAddComponent } from './docks/dock-add/dock-add.component';
import { DockEditComponent } from './docks/dock-edit/dock-edit.component';
import { DockDetailComponent } from './docks/dock-detail/dock-detail.component';
import { ShipDetailComponent } from './ships/ship-detail/ship-detail.component';
import { DocksAllComponent } from './docks/docks-all/docks-all.component';
import { ShipsAllComponent } from './ships/ships-all/ships-all.component';

@NgModule({
  declarations: [
    AppComponent,
    MapOlComponent,
    MainComponent,
    DocksComponent,
    ShipsComponent,
    ShipAddComponent,
    DockAddComponent,
    ShipEditComponent,
    DockEditComponent,
    DockDetailComponent,
    ShipDetailComponent,
    DocksAllComponent,
    ShipsAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
