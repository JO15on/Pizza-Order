import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';
import { ShareDataService } from 'src/app/share-data.service';
import { CounterService } from 'src/app/counter.service';

@Component({
  selector: 'app-shoppingcart-details',
  templateUrl: './shoppingcart-details.component.html',
  styleUrls: ['./shoppingcart-details.component.css']
})
export class ShoppingcartDetailsComponent implements OnInit {

  pizzaCart : MenuItem[];
  count : number;

  constructor(private share: ShareDataService, public _count : CounterService) {  
    this.share.currentData.subscribe((data: any) => this.pizzaCart = data);
  }

  ngOnInit() : void {
    this._count.sendCounter().subscribe(count => this.count = count);
  }

  deletefromCart(pizzaCart:MenuItem){
    this.count--;
    this._count.setCounter(this.count);
    setTimeout(() => {
      let index = this.pizzaCart.indexOf(pizzaCart);
      this.pizzaCart.splice(index, 1);
    }, 0);
  }

}
