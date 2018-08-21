import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundDirective } from './background.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BackgroundDirective],
  exports: [
    [BackgroundDirective]
  ]
})
export class SharedModule { }
