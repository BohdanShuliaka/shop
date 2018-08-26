import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product.model';
import { CartService } from '../services/cart.service';

enum myEnum {
  First = 'free',
  Second = 0,
  Third,
  Fourth,
}
@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {


  product: Product;
  products: Array<Product>;

  constructor(
    public productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuy(event: any): void {
    console.log('Product has been bought!');
}
  onAddToCart(product: Product): void {
    console.log('product-list component', product);
    this.cartService.addProductToCart(product);
  }

}
