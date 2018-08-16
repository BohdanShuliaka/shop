import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

enum myEnum {
  First = 'free',
  Second = 0,
  Third,
  Fourth,
}
@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();


  name: string = 'My Shop';
  description: string = 'My first in history Angular 6 shop project';
  price: number = 10000;
  isAvailable: boolean = true;
  category = myEnum;

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
    this.productService.removeProduct(product);
    this.cartService.addProductToCart(product);
  }

}
