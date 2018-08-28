import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle')
  appTitle: ElementRef;
  title = 'shop';
  constructor() {

  }
  // title = {
  //   a: "Shop"
  // };
  ngAfterViewInit() {
    (<HTMLElement>this.appTitle.nativeElement).innerText = 'App';
  }
}
