import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {Dock} from "../dock";
import {DocksService} from "../docks.service";

@Component({
  selector: 'app-dock-detail',
  templateUrl: './dock-detail.component.html',
  styleUrls: ['./dock-detail.component.css'],
  providers: [DocksService]
})
export class DockDetailComponent implements OnInit {
  dock: Dock | undefined;

  constructor(
    private dockService: DocksService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDock();
  }

  public getDock(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.dockService.getDock(id)
      .subscribe(result => {
        this.dock = result;
        console.log('Dock:');
        console.log(this.dock);
      })
  }

}
