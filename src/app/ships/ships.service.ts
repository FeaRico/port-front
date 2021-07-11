import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

import {Ship} from "./ship";

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private jsonServerUrl: string = 'http://localhost:3000/ships';
  private springServerUrl: string = 'http://localhost:8080/allShips';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  //GET all ships
  public getAllShips(): Observable<Ship[]> {
    return this.http.get<Ship[]>(this.jsonServerUrl);
  }

  //GET ship by id
  public getShip(id: number): Observable<Ship> {
    const url = `${this.jsonServerUrl}/${id}`;
    return this.http.get<Ship>(url);
  }

  //POST add a new ship
  public addShip(ship: Ship): Observable<Ship> {
    return this.http.post<Ship>(this.jsonServerUrl, ship, this.httpOptions);
  }

  //DELETE the ship
  public deleteShip(id: number): Observable<Ship> {
    const url = `${this.jsonServerUrl}/${id}`;
    return this.http.delete<Ship>(url, this.httpOptions);
  }

  //PUT update the ship
  public updateShip(ship: Ship): Observable<any> {
    return this.http.put(this.jsonServerUrl, ship, this.httpOptions);
  }

}
