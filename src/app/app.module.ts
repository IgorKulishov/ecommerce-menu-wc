import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    MainMenuComponent,
    AppComponent
  ],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const menuWc = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('ecommerce-menu-wc', menuWc);
  }
}
