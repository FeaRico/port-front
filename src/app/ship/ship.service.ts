import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

import {Ship} from "./ship";

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  private jsonServerUrl: string = 'http://localhost:3000/allShips';
  private springServerUrl: string = 'http://localhost:8080/allShips';

  constructor(private http: HttpClient) { }

  public getAllShips(): Observable<Ship[]>{
    return this.http.get<Ship[]>(this.jsonServerUrl);
  }

}