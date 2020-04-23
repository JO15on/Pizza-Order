import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  total : number;
  pizzaCart : MenuItem[];
  public data = new BehaviorSubject<number>(0);

  constructor(public http : HttpClient) { }

  addTotal(total : number){
    let newtotal = 0;
    newtotal = total + this.data.value;
    this.data.next(newtotal);
  }

  addSubTotal() : Observable<number> {
    return this.data.asObservable()   
  }

  deleteTotal(total : number){
    let newTotal = this.data.value;
    newTotal = this.data.value - total;
    this.data.next(newTotal);
  }

}
