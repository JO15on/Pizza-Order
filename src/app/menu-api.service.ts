import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuAPIService {

  constructor(public http: HttpClient) { }

  getMenu() {
    return this.http.get("http://localhost:3000/pizza", {responseType: "json"});
  }

  itemUpdate(quantity){
    return this.http.put("http://localhost:3000/pizza/:id", {menu: quantity}, {responseType: "json"});
  }
}
