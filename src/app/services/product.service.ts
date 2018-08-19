import { Injectable } from '@angular/core';

import { Product } from '../product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product('DELUXE COOKED HAM', 5.15, 1, true),
    new Product('DELUXE LOW-SODIUM COOKED HAM', 6.15, 2, false),
    new Product('HONEY MAPLE HAM 1/2', 8, 3, true),
    new Product('BAVARIAN SMOKED HAM', 7.45, 4, true),
    new Product('PESTO PARMESAN HAM', 5.80, 5, true),
  ];
  constructor() { }

  getProducts(): Array<Product> {
    return this.products;
  }

  removeProduct(product: Product): void {
    const ind = this.products.findIndex((item) => item.productId === product.productId);
    this.products.splice(ind, 1);
  }
  addProduct(product: Product): void {
    this.products.push(product);
  }
}
