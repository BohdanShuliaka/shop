import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    public productService: ProductService
  ) { }

  products: Product[];

  ngOnInit() {
    this.products = this.cartService.getCartProducts();
  }

  onRemoveFromCart(product: Product): void {
    this.cartService.removeProductFromCart(product);


  }
  getTotalPrice(): number {
    return this.cartService.getSumm();
  }
  getQuantity(): number {
    return this.cartService.getQuantity();
  }
  qntyChange(event) {
    // console.log(event);
    this.cartService.updateCartQnty(event);
  }

}
