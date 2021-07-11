import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MapOlComponent } from "./map-ol/map-ol.component";
import {MainComponent} from "./main/main.component";
import {DocksComponent} from "./docks/docks.component";
import {ShipsComponent} from "./ships/ships.component";
import {DockAddComponent} from "./docks/dock-add/dock-add.component";
import {DockEditComponent} from "./docks/dock-edit/dock-edit.component";
import {DockDetailComponent} from "./docks/dock-detail/dock-detail.component";
import {ShipAddComponent} from "./ships/ship-add/ship-add.component";
import {ShipEditComponent} from "./ships/ship-edit/ship-edit.component";
import {ShipDetailComponent} from "./ships/ship-detail/ship-detail.component";
import {DocksAllComponent} from "./docks/docks-all/docks-all.component";
import {ShipsAllComponent} from "./ships/ships-all/ships-all.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'map',
    component: MapOlComponent
  },
  {
    path: 'docks',
    component: DocksComponent,
    children: [
      { path: 'all', component: DocksAllComponent },
      { path: 'add', component: DockAddComponent },
      { path: 'edit/:id', component: DockEditComponent },
      { path: 'detail/:id', component: DockDetailComponent }
    ],
  },
  {
    path: 'ships',
    component: ShipsComponent,
    children: [
      { path: 'all', component: ShipsAllComponent },
      { path: 'add', component: ShipAddComponent },
      { path: 'edit/:id', component: ShipEditComponent },
      { path: 'detail/:id', component: ShipDetailComponent }
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
