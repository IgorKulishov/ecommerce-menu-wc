import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'ecommerce-menu-wc';
}
