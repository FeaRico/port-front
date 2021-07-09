import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MapOlComponent } from "./map-ol/map-ol.component";
import {MainComponent} from "./main/main.component";
import {DockComponent} from "./dock/dock.component";
import {ShipComponent} from "./ship/ship.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'map', component: MapOlComponent},
  {path: 'docks', component: DockComponent},
  {path: 'ships', component: ShipComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
