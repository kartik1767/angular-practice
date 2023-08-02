import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  users(){
    return [
      {name: 'Anil', age: 28, email: 'anil@test.com'},
      {name: 'Mane', age: 22, email: 'mane@test.com'},
      {name: 'Kartik', age: 24, email: 'kartik@test.com'},
    ]
  }
}
