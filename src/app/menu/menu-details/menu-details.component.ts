import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';
import { ShareDataService } from 'src/app/share-data.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  item : MenuItem;
  menu : MenuItem[];
  pizzaCart : MenuItem[] = [];

  constructor(private share: ShareDataService) { 
    this.share.currentData.subscribe(data => this.pizzaCart = data);
  }

  ngOnInit(): void {
  }

  addCart(){
    this.pizzaCart.push(this.item);
    this.share.changeData(this.pizzaCart);
  }

}
