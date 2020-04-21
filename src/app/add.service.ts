import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  add : number;
  total : number;
  pizzaCart : MenuItem[];
  public data = new BehaviorSubject<number>(0);

  constructor(public http : HttpClient) { }

  addTotal(add : number){
    this.data.next(add);
  }

  addSubTotal() : Observable<number> {
    return this.data.asObservable()   
  }

  getSubTotal(total) {
    let total = 0;
    for(let item of this.pizzaCart){
      total += item.price;
    }
  }

}
