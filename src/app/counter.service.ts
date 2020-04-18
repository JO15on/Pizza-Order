import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count : number;
  public data = new BehaviorSubject<number>(0);

  constructor() { }

  getCounter(){
    this.count--;
    console.log(this.count);
    return this.count;
  }

  setCounter(count : number){
    console.log(count);
    this.data.next(count);
  }

  sendCounter() : Observable<number> {
    return this.data.asObservable()   
  }
}
