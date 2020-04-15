import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuAPIService } from '../menu-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( public service : MenuAPIService) { }

  menu  : MenuItem[]=[];
  showShoppingCart = false;
  showMenu = true;

  ngOnInit(): void {
    this.getMenu();
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
}
