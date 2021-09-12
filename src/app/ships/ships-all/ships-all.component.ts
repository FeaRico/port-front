import { Component, OnInit } from '@angular/core';
import {faPenSquare} from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

import { Ship } from '../ship';
import { ShipsService } from '../ships.service';

@Component({
  selector: 'app-ships-all',
  templateUrl: './ships-all.component.html',
  styleUrls: ['./ships-all.component.css'],
  providers: [ShipsService]
})
export class ShipsAllComponent implements OnInit {
  ships: Ship[];

  displayedColumns: string[] = ['id', 'name', 'status', 'type', 'flag',
    'yearBuilt', 'homePort', 'dockNum', 'detail', 'delete'];

  icons = new Map([
    ['detail', faPenSquare],
    ['delete', faTrashAlt]
  ]);

  constructor(
    private shipService: ShipsService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.getShips();
  }

  public getShips(): void {
    this.shipService.getAllShips().subscribe(result => {
      this.ships = result;
    });
  }

  public deleteShip(id: number): void {
    this.shipService.deleteShip(id)
      .subscribe(result => {
        console.log('Ship deleted');
      });
  }

  public openAddPage(): void {
    this.route.navigate(['/ships/add']).then(r => console.log(r));
  }

}
