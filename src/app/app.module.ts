import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductService } from './services/product.service';
import { CartModule } from './cart/cart.module';
import { ProductComponentModule } from './product-list-component/product-list-component.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductComponentModule,
    SharedModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
