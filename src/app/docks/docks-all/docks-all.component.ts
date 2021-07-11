import { Component, OnInit } from '@angular/core';

import {Dock} from "../dock";
import {DocksService} from "../docks.service";

/*const ELEMENT_DATA: Dock[] = [
  {id: 1, size: 1},
  {id: 2, size: 5},
  {id: 3, size: 2},
  {id: 4, size: 4},
  {id: 5, size: 6}
];*/

@Component({
  selector: 'app-dock-all',
  templateUrl: './docks-all.component.html',
  styleUrls: ['./docks-all.component.css']
})
export class DocksAllComponent implements OnInit {
  docks: Dock[];
  displayedColumns: string[] = ['id', 'size'];

  constructor(private dockService: DocksService) { }

  ngOnInit(): void {
    this.getDocks();
  }

  public getDocks(): void{
    this.dockService.getAllDocks().subscribe(result => {
      this.docks = result;
      console.log('Docks array:');
      console.log(this.docks);
    })
  }

}
