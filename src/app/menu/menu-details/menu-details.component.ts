import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';
import { ShareDataService } from 'src/app/share-data.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  @Input()item : MenuItem;
  menu : MenuItem[];
  pizzaCart : MenuItem[] = [];

  @Output() count = new EventEmitter<any>();

  constructor(private share: ShareDataService) { 
    this.share.currentData.subscribe(data => this.pizzaCart = data);
  }

  ngOnInit(): void {
  }

  addCart(){
    this.pizzaCart.push(this.item);
    this.share.changeData(this.pizzaCart);
  }

  incrementCount(){
    this.count.emit();
  }

}
