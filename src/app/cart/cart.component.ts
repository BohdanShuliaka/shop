import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  products: Product[];

  ngOnInit() {
    this.products = this.cartService.getCartProducts();
  }

  getTotalPrice(): number {
    return this.cartService.getSumm();
  }

}
