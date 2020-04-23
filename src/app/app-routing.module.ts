import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/menu'
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'shoppingcart',
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
