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

  addTotal(total : number){
    this.data.next(total);
  }

  addSubTotal() : Observable<number> {
    return this.data.asObservable()   
  }

  getTotal(){
    return this.total;
  }

}
