import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Array<Product> = [];

  constructor() { }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }

  getSumm(): number {
    return this.cartProducts.reduce((accum: number, item: Product) => accum + item.price, 0);
  }

  addProductToCart(product: Product): void {
    this.cartProducts.push(product);
    console.log('product added');
  }

}
