import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';
import { ShareDataService } from 'src/app/share-data.service';
import { AddService } from 'src/app/add.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  @Input()item : MenuItem;
  menu : MenuItem[];
  pizzaCart : MenuItem[] = [];

  constructor(private share: ShareDataService, private _total : AddService) { 
    this.share.currentData.subscribe(data => this.pizzaCart = data);
  }

  ngOnInit(): void {
  }

  addCart(){
    this.pizzaCart.push(this.item);
    this.share.changeData(this.pizzaCart);
    this._total.addTotal(this.item.price);
  }

}
