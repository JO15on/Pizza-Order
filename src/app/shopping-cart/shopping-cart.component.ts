import { Component, OnInit, Output } from '@angular/core';
import { MenuItem } from '../menu-item';
import { AddService } from '../add.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  pizzaCart : MenuItem[];
  item: string;
  total : number;

  constructor(private _total : AddService) { }

  ngOnInit(): void {
    this._total.addSubTotal().subscribe(total => this.total = total);
  }

  submit(){
    this.pizzaCart.length = 0;
  }

}
