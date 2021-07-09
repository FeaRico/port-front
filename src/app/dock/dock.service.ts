import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Dock} from "./dock";

@Injectable({
  providedIn: 'root'
})
export class DockService {
  private jsonServiceUrl: string = "http://localhost:3000/allDocks";
  private springServiceUrl: string = "http://localhost:8080/api/allDocks";

  constructor(private http: HttpClient) { }

  public getAllDocks(): Observable<Dock[]>{
    return this.http.get<Dock[]>(this.jsonServiceUrl);
  }
}
