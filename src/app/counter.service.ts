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
    return this.count;
  }

  setCounter(count : number){
    this.data.next(count);
  }

  sendCounter() : Observable<number> {
    return this.data.asObservable()   
  }
}
