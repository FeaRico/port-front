import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

import {ShipsService} from "../ships.service";
import {Ship} from "../ship";

@Component({
  selector: 'app-ship-add',
  templateUrl: './ship-add.component.html',
  styleUrls: ['./ship-add.component.css']
})
export class ShipAddComponent implements OnInit {

  constructor(
    private shipsService: ShipsService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  /*
  status: string;
  type: string;
  flag: string;
  yearBuilt: number;
  homePort: string;
  dockNum: bigint;
  lat: number | null;
  lon: number | null;*/

  public add(name: any, status: any, type: any,
             flag: any, yearBuilt: any, homePort: any, dockNum: any): void{

    name = name.trim();
    status = status.trim();
    type = type.trim();
    flag = flag.trim();
    yearBuilt = yearBuilt.trim();
    homePort = homePort.trim();
    dockNum = dockNum.trim();

    name = name.toString();
    status = status.toString();
    type = type.toString();
    flag = flag.toString();
    yearBuilt = parseInt(yearBuilt);
    homePort = homePort.toString();
    dockNum = parseInt(dockNum);

    if(!name || !status || !type
      || !flag || !yearBuilt || !homePort || !dockNum){
      return;
    }
    // { name, status, type, flag, yearBuilt, homePort, dockNum} as Ship
    let lat = 0;
    let lon = 0;

    let shipObj = <Ship>{name, status, type, flag, yearBuilt, homePort, dockNum, lat, lon}

    this.shipsService.addShip(shipObj)
      .subscribe(ship => {
        console.log(ship);
      });
    this.backToPage();
  }

  public backToPage(): void {
    this.location.back();
  }
}
