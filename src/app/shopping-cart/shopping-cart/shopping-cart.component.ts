import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';
import { ShareDataService } from 'src/app/share-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  pizzaCart : MenuItem[];

  constructor(private share: ShareDataService) {  
    this.share.currentData.subscribe((data: any) => this.pizzaCart = data);
  }

  ngOnInit(): void {
  }

  delete(pizzaCart:MenuItem){
    let index = this.pizzaCart.indexOf(pizzaCart);
    this.pizzaCart.splice(index, 1);
  }

  submit(){
    this.pizzaCart.length = 0;
  }
}
