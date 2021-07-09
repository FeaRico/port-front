import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import {View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";

@Component({
  selector: 'app-map-ol',
  templateUrl: './map-ol.component.html',
  styleUrls: ['./map-ol.component.css']
})
export class MapOlComponent implements OnInit {

  private map: Map | null = null;

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map-ol'
    });
  }

}
