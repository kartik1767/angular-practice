import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IPlaceholder} from '../placeholder'
@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(private http :HttpClient) { }

  private url: string = "https://jsonplaceholder.typicode.com/posts"

  getData(): Observable<IPlaceholder[]>{
    return this.http.get<IPlaceholder[]>(this.url)
  }

  // getMployees(): Observable<IEmployee[]>{
  //   return this.http.get<IEmployee[]>(this._url)
  // }
}

