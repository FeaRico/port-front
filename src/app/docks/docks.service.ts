import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {Dock} from "./dock";

@Injectable({
  providedIn: 'root'
})
export class DocksService {
  private jsonServiceUrl: string = "http://localhost:3000/docks";
  private springServiceUrl: string = "http://localhost:8080/api/allDocks";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public getAllDocks(): Observable<Dock[]>{
    return this.http.get<Dock[]>(this.jsonServiceUrl);
  }

  //GET dock by id
  public getDock(id: number): Observable<Dock> {
    const url = `${this.jsonServiceUrl}/${id}`;
    return this.http.get<Dock>(url);
  }

  //POST add a new dock
  public addDock(dock: Dock): Observable<Dock> {
    return this.http.post<Dock>(this.jsonServiceUrl, dock, this.httpOptions);
  }

  //DELETE the dock
  public deleteDock(id: number): Observable<Dock> {
    const url = `${this.jsonServiceUrl}/${id}`;
    return this.http.delete<Dock>(url, this.httpOptions);
  }

  //PUT update the dock
  public updateDock(dock: Dock): Observable<any> {
    const url = `${this.jsonServiceUrl}/${dock.id}`
    return this.http.put<Dock>(url, dock, this.httpOptions);
  }
}
