import { Component, OnInit } from '@angular/core';

import { Ship } from '../ship';
import { ShipsService } from '../ships.service';

/*const ELEMENT_DATA: Ship[] = [
  {id: 1, name: 'SSSS', status: 'ACTIVE', type: 'FLF', flag: 'RUSSIA', yearBuilt: 2003, homePort: 'SAINT-PETERSBURG', dockNum: 2, lon: 54, lat: 23},
  {id: 2, name: 'SSSS', status: 'ACTIVE', type: 'FLF', flag: 'RUSSIA', yearBuilt: 2001, homePort: 'SAINT-PETERSBURG', dockNum: 3, lon: 54, lat: 23},
  {id: 3, name: 'SSSS', status: 'ACTIVE', type: 'FLF', flag: 'RUSSIA', yearBuilt: 2002, homePort: 'SAINT-PETERSBURG', dockNum: 1, lon: 54, lat: 23}
];*/

@Component({
  selector: 'app-ships-all',
  templateUrl: './ships-all.component.html',
  styleUrls: ['./ships-all.component.css'],
  providers: [ShipsService]
})
export class ShipsAllComponent implements OnInit {
  ships: Ship[];

  displayedColumns: string[] = ['id', 'name', 'status', 'type', 'flag', 'yearBuilt', 'homePort', 'dockNum'];

  constructor(private shipService: ShipsService) {
  }

  ngOnInit(): void {
    this.getShips();
  }

  public getShips(): void {
    this.shipService.getAllShips().subscribe(result => {
      this.ships = result;
    });
  }

}
