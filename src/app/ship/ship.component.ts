import { Component, OnInit } from '@angular/core';

import { Ship } from './ship';
import { ShipService } from './ship.service';

/*const ELEMENT_DATA: Ship[] = [
  {id: 1, name: 'SSSS', status: 'ACTIVE', type: 'FLF', flag: 'RUSSIA', yearBuilt: 2003, homePort: 'SAINT-PETERSBURG', dockNum: 2, lon: 54, lat: 23},
  {id: 2, name: 'SSSS', status: 'ACTIVE', type: 'FLF', flag: 'RUSSIA', yearBuilt: 2001, homePort: 'SAINT-PETERSBURG', dockNum: 3, lon: 54, lat: 23},
  {id: 3, name: 'SSSS', status: 'ACTIVE', type: 'FLF', flag: 'RUSSIA', yearBuilt: 2002, homePort: 'SAINT-PETERSBURG', dockNum: 1, lon: 54, lat: 23}
];*/

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  providers: [ShipService],
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {
  ships: Ship[];

  displayedColumns: string[] = ['id', 'name', 'status', 'type', 'flag', 'yearBuilt', 'homePort', 'dockNum'];

  constructor(private shipService: ShipService) {
 }

  ngOnInit(): void {
    this.getShips();
  }

  public getShips(): void{
    this.shipService.getAllShips().subscribe(result => {
      this.ships = result;
    });

  }
}
