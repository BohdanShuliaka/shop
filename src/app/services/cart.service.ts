import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Array<Product> = [];
  private totalPrice: number;
  private totalQnty: number;

  constructor() { }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }

  getSumm(): number {
    this.calculateSumm();
    return +this.totalPrice;
  }
  getQuantity(): number {
    this.calculateQuantity();
    return +this.totalQnty;
  }
  calculateSumm(): void {
    const sum = this.cartProducts.reduce((accum: number, item: Product) => accum + item.price * item.qnty, 0).toFixed(2);
    this.totalPrice = +sum;
  }
  calculateQuantity(): void {
    const qnty = this.cartProducts.reduce((accum: number, item: Product) => accum + item.qnty, 0);
    this.totalQnty = +qnty.toFixed(2);
  }
  addProductToCart(product: Product): void {
    const alreadyIn =  this.cartProducts.includes(product);
    if (alreadyIn) {
      console.log(product);
      console.log('already in');
      const itemInCart = this.cartProducts.filter((item) => item.productId === product.productId)[0];
      itemInCart.qnty = itemInCart.qnty + 1;

      const ind = this.cartProducts.findIndex((item) => item.productId === product.productId);
      this.cartProducts.splice(ind, 1);

      this.cartProducts.push(itemInCart);
    } else {
      console.log(product);
      this.cartProducts.push(product);
    }

    console.log('product added');
  }
  removeProductFromCart(product: Product): void {
    const itemInCart = this.cartProducts.filter((item) => item.productId === product.productId)[0];
    itemInCart.qnty = 1;
    const ind = this.cartProducts.findIndex((item) => item.productId === product.productId);
    this.cartProducts.splice(ind, 1);
    console.log(this.cartProducts);
  }
  clearCart() {
    this.cartProducts = [];
  }
  updateCartQnty(data): void {
    console.log('last instance', data);
    const itemInCart = this.cartProducts.filter((item) => item.productId === data.el)[0];
      itemInCart.qnty = data.inputVal;

      const ind = this.cartProducts.findIndex((item) => item.productId === data.el);
      this.cartProducts.splice(ind, 1);

      this.cartProducts.push(itemInCart);

      this.getQuantity();
  }
}
