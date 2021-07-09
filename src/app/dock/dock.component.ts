import { Component, OnInit } from '@angular/core';

import {Dock} from "./dock";
import {DockService} from "./dock.service";

/*const ELEMENT_DATA: Dock[] = [
  {id: 1, size: 1},
  {id: 2, size: 5},
  {id: 3, size: 2},
  {id: 4, size: 4},
  {id: 5, size: 6}
];*/

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.css']
})
export class DockComponent implements OnInit {
  docks: Dock[];
  displayedColumns: string[] = ['id', 'size'];

  constructor(private dockService: DockService) { }

  ngOnInit(): void {
    this.getDocks();
  }

  public getDocks(): void{
     this.dockService.getAllDocks().subscribe(result => {
       this.docks = result;
       console.log(this.docks);
     })
  }

}
