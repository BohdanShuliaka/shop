import { Product } from './../../product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  @Output()  remove: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }
  onRemove(product: Product): void {
    this.remove.emit(product);
  }
}
