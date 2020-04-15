import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    MenuComponent,
    MenuDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
