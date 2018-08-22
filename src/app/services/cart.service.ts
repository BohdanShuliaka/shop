import { Injectable } from '@angular/core';
import { Product } from '../product.model';

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
    let sum = this.cartProducts.reduce((accum: number, item: Product) => accum + item.price, 0);
    return +sum.toFixed(2);
  }

  addProductToCart(product: Product): void {
    this.cartProducts.push(product);
    console.log('product added');
  }
  removeProductFromCart(product: Product): void {
    const ind = this.cartProducts.findIndex((item) => item.productId === product.productId);
    this.cartProducts.splice(ind, 1);
  }
}
