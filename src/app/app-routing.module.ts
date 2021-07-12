import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MapOlComponent } from "./map-ol/map-ol.component";
import {MainComponent} from "./main/main.component";
import {DocksComponent} from "./docks/docks.component";
import {ShipsComponent} from "./ships/ships.component";
import {DockAddComponent} from "./docks/dock-add/dock-add.component";
import {DockDetailComponent} from "./docks/dock-detail/dock-detail.component";
import {ShipAddComponent} from "./ships/ship-add/ship-add.component";
import {ShipDetailComponent} from "./ships/ship-detail/ship-detail.component";
import {DocksAllComponent} from "./docks/docks-all/docks-all.component";
import {ShipsAllComponent} from "./ships/ships-all/ships-all.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

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
      { path: '', redirectTo: 'all', pathMatch: 'full'},
      { path: 'all', component: DocksAllComponent },
      { path: 'add', component: DockAddComponent },
      { path: 'detail/:id', component: DockDetailComponent }
    ],
  },
  {
    path: 'ships',
    component: ShipsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full'},
      { path: 'all', component: ShipsAllComponent },
      { path: 'add', component: ShipAddComponent },
      { path: 'detail/:id', component: ShipDetailComponent }
    ],
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
