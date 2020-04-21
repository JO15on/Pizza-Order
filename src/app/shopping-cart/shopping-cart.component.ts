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
  total : number;

  constructor(private _total : AddService) { }

  ngOnInit(): void {
    this.getSubTotal();
  }

  getSubTotal(){
    this._total.getSubTotal(this.total).subscribe( (total : MenuItem[]) => {
      total = total;
    });
  }

  submit(){
    this.pizzaCart.length = 0;
  }

}
