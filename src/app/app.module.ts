import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductService } from './product.service';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent
  ],
  imports: [
    BrowserModule,
    CartModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
