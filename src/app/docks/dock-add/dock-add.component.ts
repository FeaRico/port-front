import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

import {DocksService} from "../docks.service";
import {Dock} from "../dock";

@Component({
  selector: 'app-dock-add',
  templateUrl: './dock-add.component.html',
  styleUrls: ['./dock-add.component.css']
})
export class DockAddComponent implements OnInit {
  docks: Dock[];

  constructor(
    private docksService: DocksService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  public add(size: any){
    size = size.trim();
    size = parseInt(size);
    let lon = 0;
    let lat = 0;
    let amountShips = 0;
    if(!size){
      return;
    }
    this.docksService.addDock({size, lon, lat, amountShips } as Dock)
      .subscribe(dock => {
        console.log(dock);
      });
    this.backToPage();
  }

  public backToPage(): void {
    this.location.back();
  }

}
