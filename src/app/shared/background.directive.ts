import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  @Input('appBackground') color: string;
 
  
  constructor(private el: ElementRef, private render: Renderer2) {
  }
  @HostListener('click')
  onMouseClick() {
    console.log('1111');
    this.backgroundChange(this.color)
  }
  private backgroundChange(color: string) {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color)
  }
}
