import { Product } from './../../product.model';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  @Output()  remove: EventEmitter<Product> = new EventEmitter<Product>();
  @Output()  qntyChange: EventEmitter<object> = new EventEmitter<object>();

  @ViewChild('input')
  inputValue: ElementRef;

  isChangeable = false;
  buttonIsVisible = true;
  constructor() { }

  ngOnInit() {
  }
  onRemove(product: Product): void {
    event.stopPropagation();
    this.remove.emit(product);
  }
  onQntyChange() {
    event.stopPropagation();
    this.isChangeable = !this.isChangeable;
    this.buttonIsVisible = !this.buttonIsVisible;
  }
  onQntySave(el) {
    event.stopPropagation();
    const inputVal = (<HTMLInputElement>this.inputValue.nativeElement).value;
    const valueObj = {
      inputVal,
      el
    };
    this.qntyChange.emit(valueObj);
    (<HTMLInputElement>this.inputValue.nativeElement).value = '';
    this.onQntyChange();
  }
}
