import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuAPIService } from '../menu-api.service';
import { CounterService } from '../counter.service';
import { AddService } from '../add.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( public service : MenuAPIService, private _count : CounterService, private _total : AddService) { }

  menu  : MenuItem[]=[];
  showShoppingCart = false;
  showMenu = true;
  count : number = 0;

  ngOnInit(): void {
    this.getMenu();
    this._count.sendCounter().subscribe(count => this.count = count);
  }

  getMenu() {
    this.service.getMenu().subscribe( (menu : MenuItem[]) => {
      this.menu = menu;
    });
  }

  cart(){
    this.showShoppingCart = !this.showShoppingCart;
    this.showMenu = !this.showMenu;
  }

  counter(){
    this.count++;
    this._count.setCounter(this.count);
  }

}
