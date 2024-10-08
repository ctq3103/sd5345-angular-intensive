import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PriceDetailsComponent } from './price-details/price-details.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    HeaderComponent,
    HomeComponent,
    PriceDetailsComponent,
    ProductComponent,
    ProductDetailsComponent,
    SidePanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
