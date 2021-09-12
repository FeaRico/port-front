import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {faPenSquare} from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import {Dock} from "../dock";
import {DocksService} from "../docks.service";

@Component({
  selector: 'app-dock-all',
  templateUrl: './docks-all.component.html',
  styleUrls: ['./docks-all.component.css']
})
export class DocksAllComponent implements OnInit {
  docks: Dock[];
  displayedColumns: string[] = ['id', 'size', 'detail', 'delete'];
  icons = new Map([
    ["detail", faPenSquare],
    ["delete", faTrashAlt]
  ])

  constructor(
    private dockService: DocksService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getDocks();
  }

  public getDocks(): void {
    this.dockService.getAllDocks().subscribe(result => {
      this.docks = result;
      console.log('Docks array: ' + this.docks);
    });
  }

  public deleteDock(id: number): void {
    this.dockService.deleteDock(id)
      .subscribe(result => {
        console.log('Dock deleted: ' + result);
      });
  }

  public openAddPage(): void {
    this.route.navigate(['/docks/add']).then(r => console.log(r));
  }

}
