import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingcartDetailsComponent } from './shopping-cart/shoppingcart-details/shoppingcart-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    MenuComponent,
    MenuDetailsComponent,
    ShoppingcartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
