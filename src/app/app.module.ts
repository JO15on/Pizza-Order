import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingcartDetailsComponent } from './shopping-cart/shoppingcart-details/shoppingcart-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { CounterService } from './counter.service';
import { AddService } from './add.service';


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
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [
    CounterService,
    AddService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
