import { Component, OnInit, Output } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  pizzaCart : MenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.pizzaCart.length = 0;
  }

}
