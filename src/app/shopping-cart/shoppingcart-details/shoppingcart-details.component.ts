import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';
import { ShareDataService } from 'src/app/share-data.service';

@Component({
  selector: 'app-shoppingcart-details',
  templateUrl: './shoppingcart-details.component.html',
  styleUrls: ['./shoppingcart-details.component.css']
})
export class ShoppingcartDetailsComponent implements OnInit {

  pizzaCart : MenuItem[];

  @Output() count = new EventEmitter<any>();

  constructor(private share: ShareDataService) {  
    this.share.currentData.subscribe((data: any) => this.pizzaCart = data);
  }

  ngOnInit() : void {
  }

  deletefromCart(pizzaCart:MenuItem){
    let index = this.pizzaCart.indexOf(pizzaCart);
    this.pizzaCart.splice(index, 1);
  }
  
  deleteCounter(){
    this.count.emit();
  }

}
