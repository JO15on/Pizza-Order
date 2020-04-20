import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  add : number
  public data = new BehaviorSubject<number>(0);

  constructor(public http : HttpClient) { }

  addTotal(add : number){
    this.data.next(add);
  }

  addCounter() : Observable<number> {
    return this.data.asObservable()   
  }

  getPrice(price){
    return this.http.get("http://localhost:3000/pizza/:id", { responseType: "json"}).subscribe(data => {
    console.log(data);
  });
  }
  
}
