import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count : number;

  constructor() { }

  getCounter(){
    return this.count = this.count--;
  }
}
