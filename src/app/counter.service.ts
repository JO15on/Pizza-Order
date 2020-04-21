import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count : number;
  public data = new BehaviorSubject<number>(0);

  constructor() { }

<<<<<<< HEAD
=======
  getCounter(){
    this.count--;
    console.log(this.count);
    return this.count;
  }

>>>>>>> parent of 1d2a7d4... took out console log
  setCounter(count : number){
    this.data.next(count);
  }

  sendCounter() : Observable<number> {
    return this.data.asObservable()   
  }
}
