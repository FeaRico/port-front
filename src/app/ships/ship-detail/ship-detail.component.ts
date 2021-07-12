import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import {ActivatedRoute} from "@angular/router";

import {Ship} from "../ship";
import {ShipsService} from "../ships.service";

@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css'],
  providers: [ShipsService]
})
export class ShipDetailComponent implements OnInit {
  ship: Ship | undefined;

  constructor(
    private shipsService: ShipsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getShip();
  }

  public getShip(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.shipsService.getShip(id)
      .subscribe(result => {
        this.ship = result;
        console.log(this.ship);
      })
  }

}
