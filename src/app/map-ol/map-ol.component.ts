import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import {Feature, View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {fromLonLat} from "ol/proj";
import {ShipsService} from "../ships/ships.service";
import {Point} from "ol/geom";
import {Icon, Style} from "ol/style";
import IconAnchorUnits from "ol/style/IconAnchorUnits";

@Component({
  selector: 'app-map-ol',
  templateUrl: './map-ol.component.html',
  styleUrls: ['./map-ol.component.css']
})
export class MapOlComponent implements OnInit {

  private map: Map | null = null;
  private visibleTargets: boolean = true;
  private opacityTargets: number = 1.0;
  private targetsSource = new VectorSource();
  private targetLayers;
  private osmTileLayer;
  private targets = [];
  private timer;

  constructor(private shipsService: ShipsService) {

  }

  ngOnInit(): void {

    this.getTargets();
    this.timer = setInterval(this.updateMapData, 30000);

    this.osmTileLayer = new TileLayer({
      source: new OSM(),
      zIndex: 1,
      visible: true,
      opacity: 1.0
    });

    this.targetLayers = new VectorLayer({
      source: this.targetsSource,
      zIndex: 2,
      visible: this.visibleTargets
    });

    console.log(this.targets);

    this.map = new Map({
      view: new View({
        center: fromLonLat([28.6124, 60.3594]),
        zoom: 14.5,
      }),
      layers: [
        this.osmTileLayer,
        this.targetLayers
      ],
      target: 'map-ol'
    });
  }

  public setVisibleTargets(): void{

  }

  public getTargets(): void{
    this.shipsService.getAllShips()
      .subscribe(result => {
        this.targets = result;
        this.targets.forEach(t => {
          if(t.lon != null && t.lat != null) {
            let iconStyle = new Style({
              image: new Icon({
                anchor: [0.5, 0],
                anchorXUnits: IconAnchorUnits.FRACTION,
                anchorYUnits: IconAnchorUnits.PIXELS,
                scale: 0.4,
                src: 'assets/icon_ship.png',
              })
            });
            let geom = new Point(fromLonLat([t.lon, t.lat]));
            let feature = new Feature({
              geometry: geom,
              info: t,
            });
            feature.setStyle(iconStyle);
            this.targetsSource.addFeature(feature);
            console.log(t.lon);
          }
        }, this)
        console.log(this.targets);
      })
  }

  public updateMapData() {
    console.log(this.targets);
  }

}
