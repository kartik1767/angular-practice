import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class MployeeService {


  constructor(private http: HttpClient) { }

  private _url: string = "/assets/data/employees.json"
  getMployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
  }
}
