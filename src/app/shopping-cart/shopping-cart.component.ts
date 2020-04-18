import { Component, OnInit, Output } from '@angular/core';
import { MenuItem } from '../menu-item';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  pizzaCart : MenuItem[];

  @Output() count = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.pizzaCart.length = 0;
  }

  deleteCounter(count){
    this.count.emit();
  }
}
